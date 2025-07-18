import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-red-500/20">
      {/* Animated wave */}
      <div className="relative overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-8 text-red-500"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            {/* Logo */}
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-2xl font-bold text-black">Hirex</span>
            </motion.div>

            {/* Credits */}
            <motion.div
              className="flex items-center justify-center gap-2 text-gray-600 text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span>Powered by</span>
              <Heart className="w-5 h-5 text-red-500" />
              <span className="font-semibold text-red-500">Hirex</span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connecting exceptional talent with innovative companies. 
              Building the future of tech recruitment, one developer at a time.
            </motion.p>

            {/* Copyright */}
            <motion.div
              className="pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Hirex. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;