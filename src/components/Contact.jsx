import { div, section } from "framer-motion/client";
import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
	return (
		<section className="min-h-screen bg-surface pt-20 pb-24">
			{/* Title Section */}
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center uppercase text-text-primary">
					<div className="flex items-center justify-center gap-4 mb-2">
						<div className="h-[2px] w-15 bg-highlight"></div>
						<h4 className="text-sm">Where To Find Us</h4>
						<div className="h-[2px] w-15 bg-highlight"></div>
					</div>
					<h2 className="text-4xl font-semibold">Get In Touch</h2>
				</div>
				{/* Map and Form */}
				<div className="flex justify-between items-center">
					<div className="">Map</div>
					<div className="">Form</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
