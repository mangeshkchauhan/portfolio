'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

interface BuyMeCoffeeProps {
  variant?: 'button' | 'widget' | 'inline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const BuyMeCoffee: React.FC<BuyMeCoffeeProps> = ({
  variant = 'button',
  size = 'md',
  className = '',
}) => {
  const baseUrl = 'https://www.buymeacoffee.com/mangeshkchauhan'; // Update this with your actual Buy Me a Coffee username

  const handleClick = () => {
    window.open(baseUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-3 text-white cursor-pointer">
        <div className="bg-white/20 p-2 rounded-full">
          <FaCoffee size={20} />
        </div>
        <div>
          <p className="font-bold text-sm">Buy me a coffee</p>
          <p className="text-xs opacity-90">Support my work</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BuyMeCoffee;
