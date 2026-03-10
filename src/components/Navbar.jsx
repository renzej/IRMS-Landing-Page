import React from "react";
import { navItems } from "@/constants";
import logo from "@/assets/logo.png";

const Navbar = () => {
	return (
		<header className="fixed top-0 left-0 right-0 bg-amber-300 p-0">
			<nav className="container mx-auto max-w-7xl px-6 flex items-center justify-between ">
				<a
					href="#"
					className="hover:opacity-60 transition-opacity duration-300"
				>
					<img src={logo} className="w-25 h-25" alt="IRM Logo" />
				</a>

				{/* Desktop navigation */}
				<div className="flex items-center gap-1">
					<div className="px-2 py-1 flex items-center gap-9">
						{navItems.map((link, index) => (
							<a
								className="uppercase font-semibold text-[0.83rem]"
								key={index}
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
