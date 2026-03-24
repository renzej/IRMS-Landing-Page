import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { navItems } from "@/constants";
import { XCircle } from "lucide-react";

// Components
import Navbar from "@/components/Navbar";

function App() {
	// State Trackers
	const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

	// Close drawer when resizing to desktop
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024 && mobileDrawerOpen) {
				setMobileDrawerOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [mobileDrawerOpen]);

	return (
		<>
			{/* Main content wrapper that slides */}
			<motion.div
				animate={{
					x: mobileDrawerOpen ? "calc(-1 * min(75vw, 320px))" : 0,
				}}
				transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
				className="relative"
			>
				<Navbar
					mobileDrawerOpen={mobileDrawerOpen}
					setMobileDrawerOpen={setMobileDrawerOpen}
				/>

				{/* Content */}
			</motion.div>

			{/* Mobile drawer - fixed position */}
			<AnimatePresence>
				{mobileDrawerOpen && (
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{
							type: "tween",
							duration: 0.3,
							ease: "easeInOut",
						}}
						className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-foreground-muted/98 shadow-2xl z-50"
					>
						{/* Close Button */}
						<button
							onClick={() => setMobileDrawerOpen(false)}
							className="flex items-center gap-2 px-6 py-5 w-full bg-black transition-colors text-surface hover:text-highlight duration-300"
						>
							<XCircle size={15} />
							<span className="uppercase font-bold text-[13px]">
								Close Menu
							</span>
						</button>

						{/* Navigation Links */}
						<nav className="flex flex-col space-y-0">
							{navItems.map((link, index) => (
								<a
									key={index}
									href={link.href}
									className="text-[15px] px-6 py-4 text-surface hover:text-highlight duration-300"
									onClick={() => setMobileDrawerOpen(false)}
								>
									{link.label}
								</a>
							))}
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default App;
