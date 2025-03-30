import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <FaPaperPlane className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-bold">Contact</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
            <a
              href="mailto:singh.bhawna0502@gmail.com"
              className="flex items-center gap-2 text-lg hover:text-primary transition-all duration-200 transform hover:scale-105 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-lg w-full overflow-hidden break-words"
            >
              <FaEnvelope className="w-5 h-5 flex-shrink-0" />
              <span className="truncate">singh.bhawna0502@gmail.com</span>
            </a>
            <a
              href="tel:9693559851"
              className="flex items-center gap-2 text-lg hover:text-primary transition-all duration-200 transform hover:scale-105 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-lg w-full"
            >
              <FaPhone className="w-5 h-5 flex-shrink-0" />
              +91 9199508825
            </a>
            <a
              href="https://github.com/bhawna-singh20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-primary transition-all duration-200 transform hover:scale-105 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-lg w-full"
            >
              <FaGithub className="w-5 h-5 flex-shrink-0" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bhawna-singh-9abb27197"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-primary transition-all duration-200 transform hover:scale-105 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-lg w-full"
            >
              <FaLinkedin className="w-5 h-5 flex-shrink-0" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;