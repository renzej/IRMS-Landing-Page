import { useState } from "react";

// Import for Burger and X icon
import { Menu, X } from "lucide-react";

import { navItems } from "@/constants";
import logo from "@/assets/logo.png";

const Navbar = ({ mobileDrawerOpen, setMobileDrawerOpen }) => {
	// Toggle Navbar
	const toggleNavbar = () => {
		setMobileDrawerOpen(!mobileDrawerOpen);
	};

	return (
		<>
			<header className="fixed top-0 left-0 right-0 bg-amber-300 p-0 z-50">
				<nav className="container mx-auto max-w-7xl px-6 flex items-center justify-between ">
					{/* Logo Section */}
					<a
						href="#"
						className="hover:opacity-60 transition-opacity duration-300"
					>
						<img
							src={logo}
							className="w-15 h-15 md:w-25 md:h-25 duration-300"
							alt="IRM Logo"
						/>
					</a>

					{/* Desktop navigation */}
					<div className="hidden lg:flex items-center gap-1">
						<div className="px-2 py-1 flex items-center gap-9">
							{navItems.map((link, index) => (
								<a
									href={link.href}
									className="uppercase font-semibold text-[0.83rem]"
									key={index}
								>
									{link.label}
								</a>
							))}
						</div>
					</div>
					<div className="lg:hidden md-flex flex-col justify-end">
						<button onClick={toggleNavbar}>
							{mobileDrawerOpen ? <X /> : <Menu />}
						</button>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
