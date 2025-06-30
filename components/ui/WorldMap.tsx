"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimezoneClockProps {
  city: string;
  timezone: string;
  position: { top: string; left: string };
  delay: number;
}

const TimezoneClock: React.FC<TimezoneClockProps> = ({ city, timezone, position, delay }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: timezone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <motion.div
      className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
      style={position}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="bg-black/60 backdrop-blur-sm border border-purple/40 rounded-md p-1.5 text-center min-w-[60px] shadow-lg">
        <div className="text-white text-[10px] font-semibold mb-0.5">{city}</div>
        <div className="text-purple text-xs font-mono">{time}</div>
      </div>
      <motion.div
        className="absolute -inset-0.5 bg-purple/20 rounded-md -z-10"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

const WorldMap: React.FC = () => {
  const timezones = [
    { city: "NYC", timezone: "America/New_York", position: { top: "20%", left: "20%" }, delay: 0 },
    { city: "LON", timezone: "Europe/London", position: { top: "15%", left: "48%" }, delay: 0.2 },
    { city: "TOK", timezone: "Asia/Tokyo", position: { top: "25%", left: "75%" }, delay: 0.4 },
    { city: "SYD", timezone: "Australia/Sydney", position: { top: "65%", left: "78%" }, delay: 0.6 },
    { city: "MUM", timezone: "Asia/Kolkata", position: { top: "35%", left: "62%" }, delay: 0.8 },
    { city: "LA", timezone: "America/Los_Angeles", position: { top: "30%", left: "8%" }, delay: 1.0 },
    { city: "SAO", timezone: "America/Sao_Paulo", position: { top: "55%", left: "25%" }, delay: 1.2 }
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Simplified background grid */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-purple/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: (i * 0.1) % 3
              }}
            />
          ))}
        </div>
      </div>

      {/* World map silhouette */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <motion.svg
          width="90%"
          height="80%"
          viewBox="0 0 800 400"
          className="opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          {/* Simplified world continents */}
          <motion.path
            d="M 150 100 Q 200 80 250 100 Q 300 90 350 110 Q 400 100 450 120 Q 500 110 550 130 Q 600 120 650 140 L 650 200 Q 600 190 550 200 Q 500 210 450 200 Q 400 190 350 180 Q 300 190 250 180 Q 200 170 150 160 Z"
            fill="url(#worldGradient)"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          
          {/* Additional continents */}
          <motion.ellipse
            cx="200"
            cy="250"
            rx="40"
            ry="60"
            fill="url(#worldGradient)"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
          
          <motion.ellipse
            cx="550"
            cy="280"
            rx="60"
            ry="40"
            fill="url(#worldGradient)"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          />

          <defs>
            <linearGradient id="worldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.2)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      {/* Timezone clocks */}
      {timezones.map((tz, index) => (
        <TimezoneClock
          key={index}
          city={tz.city}
          timezone={tz.timezone}
          position={tz.position}
          delay={tz.delay}
        />
      ))}

      {/* Subtle connection lines between select cities */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        {[0, 2, 4].map((index) => (
          index < timezones.length - 1 && (
            <motion.line
              key={index}
              x1={`${parseFloat(timezones[index].position.left)}%`}
              y1={`${parseFloat(timezones[index].position.top)}%`}
              x2={`${parseFloat(timezones[index + 1].position.left)}%`}
              y2={`${parseFloat(timezones[index + 1].position.top)}%`}
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="1"
              strokeDasharray="3,6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                delay: index * 0.5 + 2,
                duration: 2,
                opacity: { delay: index * 0.5 + 2.5 }
              }}
            />
          )
        ))}
      </svg>

      {/* Reduced floating particles */}
      <div className="absolute inset-0 z-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-purple/30 rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Corner message */}
      <motion.div
        className="absolute left-[155px] -bottom-1 text-right z-30"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <div className="bg-black/30 backdrop-blur-sm border border-purple/20 rounded-md px-2 py-1">
          <div className="text-purple text-xs font-semibold">Available 24/7</div>
          <div className="text-white/60 text-[10px]">Across all timezones</div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorldMap; 