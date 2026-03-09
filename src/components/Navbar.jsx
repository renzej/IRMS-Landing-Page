import React from "react";
import { navItems } from "@/constants";
import logo from "@/assets/logo.png";

const Navbar = () => {
	return (
		<header>
			<nav>
				<a href="">
					<img src={logo} className="w-25 h-25" alt="IRM Logo" />
				</a>

				{/* Desktop navigation */}
				<div>
					<div>
						{navItems.map((link, index) => (
							<a
								className="uppercase font-semibold text-sm"
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
