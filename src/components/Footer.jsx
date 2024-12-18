import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from '../assets/logo.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Institute Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src={Image}
                alt="NIT Jalandhar Logo"
                className="h-12 w-12 mr-3"
              />
              <h2 className="text-xl font-bold text-white">
                Dr. B.R. Ambedkar NIT Jalandhar
              </h2>
            </div>
            <p className="text-sm leading-relaxed">
              Promoting excellence in technical education and research 
              for the benefit of society.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/experiments" className="hover:text-white transition-colors duration-200">
                  Experiments
                </a>
              </li>
              <li>
                <a href="/research" className="hover:text-white transition-colors duration-200">
                  Research
                </a>
              </li>
              <li>
                <a href="/publications" className="hover:text-white transition-colors duration-200">
                  Publications
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-sm">G.T Road, Amritsar Bypass, Jalandhar, Punjab</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+911812690301" className="text-sm hover:text-white transition-colors duration-200">
                  +91-181-2690301
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@nitj.ac.in" className="text-sm hover:text-white transition-colors duration-200">
                  info@nitj.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/nitjalandhar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/nitjalandhar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/school/nitjalandhar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {currentYear} Dr. B.R. Ambedkar NIT Jalandhar. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white mr-4 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;