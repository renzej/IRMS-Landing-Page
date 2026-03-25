import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const Contact = () => {
	const [captchaValue, setCaptchaValue] = useState(null);

	return (
		<section className="min-h-screen bg-surface pt-27 pb-24">
			{/* Container */}
			<div className="max-w-6xl mx-auto">
				{/* Title Section */}
				<div className="text-center uppercase mb-25">
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
				</div>
				{/* Map and Form */}
				<div className="flex justify-between items-center gap-10">
					<div className="w-full h-[525px] overflow-hidden">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1295.2856937214576!2d-96.71389826414404!3d49.51148758751104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c035ca333d4e6b%3A0xbf7f3e98eedc60a7!2sIRM%20Steinbach!5e0!3m2!1sen!2sca!4v1774464834852!5m2!1sen!2sca"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
					<div className="w-full px-5">
						<form>
							{/* Name and Email */}
							<div className="flex gap-2 mb-9">
								<input
									type="text"
									placeholder="Your Name"
									className="w-full h-10 placeholder:text-sm px-3 py-1.5 border border-text-primary/20 bg-surface focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all duration-300"
								/>
								<input
									type="email"
									placeholder="Email"
									className="w-full placeholder:text-sm px-3 py-1.5 border border-text-primary/20 bg-surface focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all duration-300"
								/>
							</div>

							{/* Subject */}
							<input
								type="text"
								placeholder="Subject"
								className="w-full h-10 mb-7 placeholder:text-sm px-3 py-1.5 border border-text-primary/20 bg-surface focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all duration-300"
							/>

							{/* Message */}
							<textarea
								placeholder="Message"
								rows="6"
								className="w-full h-50 mb-10 placeholder:text-sm px-3 py-1.5 border border-text-primary/20 bg-surface focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all duration-300 resize-none"
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
								className="w-full py-3 px-6 uppercase bg-highlight text-surface font-semibold rounded-lg hover:bg-highlight/90 transition-colors duration-300"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
