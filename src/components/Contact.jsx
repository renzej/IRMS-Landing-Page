import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const Contact = () => {
	const [captchaValue, setCaptchaValue] = useState(null);

	// Animation Variants
	const headingVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const mapVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.8, delay: 0.3 },
		},
	};

	const formVariants = {
		hidden: { opacity: 0, x: 50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.8, delay: 0.3 },
		},
	};

	return (
		<section className="min-h-screen bg-surface pt-27 pb-24">
			{/* Container */}
			<div className="max-w-6xl mx-auto">
				{/* Title Section */}
				<motion.div
					className="text-center uppercase mb-15 lg:mb-25"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={headingVariants}
				>
					<div className="flex items-center justify-center gap-4 mb-2">
						<div className="h-0.5 w-15 bg-highlight"></div>
						<h4 className="text-sm tracking-[0.15em] text-text-primary/80">
							Where To Find Us
						</h4>
						<div className="h-0.5 w-15 bg-highlight"></div>
					</div>
					<h2 className="text-4xl font-semibold text-text-primary/90">
						Get In Touch
					</h2>
				</motion.div>

				{/* Map and Form */}
				<div className="flex flex-col px-10 md:px-30 lg:px-5 lg:flex-row justify-between items-center gap-10 md:gap-15 lg:gap-10">
					<motion.div
						className="w-full aspect-square shadow-lg overflow-hidden"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={mapVariants}
					>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1295.2856937214576!2d-96.71389826414404!3d49.51148758751104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c035ca333d4e6b%3A0xbf7f3e98eedc60a7!2sIRM%20Steinbach!5e0!3m2!1sen!2sca!4v1774464834852!5m2!1sen!2sca"
							width="100%"
							height="100%"
							className="border-2 border-background"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</motion.div>

					<motion.div
						className="w-full md:px-2 lg:pr-10"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={formVariants}
					>
						<form>
							{/* Name and Email */}
							<div className="flex flex-col min-[600px]:flex-row gap-4 min-[600px]:gap-2 mb-9">
								<input
									type="text"
									placeholder="Name"
									className="w-full h-10 text-sm placeholder:text-sm px-3 py-1.5 border border-text-primary/20 bg-background focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all duration-300"
								/>
								<input
									type="email"
									placeholder="Email"
									className="w-full text-sm placeholder:text-sm px-3 py-1.5 border border-text-primary/20 bg-background focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all duration-300"
								/>
							</div>

							{/* Subject */}
							<input
								type="text"
								placeholder="Subject"
								className="w-full h-10 mb-7 text-sm placeholder:text-sm px-3 py-1.5 border border-text-primary/20 bg-background focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all duration-300"
							/>

							{/* Message */}
							<textarea
								placeholder="Message"
								rows="6"
								className="w-full h-50 mb-10 text-sm placeholder:text-sm px-3 py-1.5 border border-text-primary/20 bg-background focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all duration-300 resize-none"
							></textarea>

							{/* reCAPTCHA */}
							<ReCAPTCHA
								className="mb-10"
								sitekey="6LfOCpgsAAAAAK0XVViswaijqDFS0tYPJtUfXJz0"
								onChange={(value) => setCaptchaValue(value)}
							/>

							{/* Submit Button */}
							<button
								type="submit"
								disabled={!captchaValue}
								className="w-full py-3 px-5 tracking-wider uppercase text-sm bg-highlight text-surface font-semibold rounded-md hover:bg-black/80 transition-colors duration-300"
							>
								Submit
							</button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
