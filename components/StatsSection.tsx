"use client"

import { useState, useEffect } from 'react';
import { FiBriefcase, FiUsers, FiGlobe, FiAward } from 'react-icons/fi';

const StatsSection = () => {
  const [counted, setCounted] = useState(false);
  const [stats, setStats] = useState([
    { value: 0, target: 500, suffix: '+', label: 'Companies Served', icon: <FiBriefcase className="w-6 h-6" /> },
    { value: 0, target: 98, suffix: '%', label: 'Retention Rate', icon: <FiUsers className="w-6 h-6" /> },
    { value: 0, target: 50, suffix: '+', label: 'Countries', icon: <FiGlobe className="w-6 h-6" /> },
    { value: 0, target: 3, suffix: ' Days', label: 'Avg. Time to Hire', icon: <FiAward className="w-6 h-6" /> },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (element && window.scrollY + window.innerHeight > element.offsetTop + 200 && !counted) {
        setCounted(true);
        animateCounters();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [counted]);

  const animateCounters = () => {
    const duration = 2000; // Animation duration in ms
    const startTime = performance.now();

    const updateCounters = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setStats(prevStats =>
        prevStats.map(stat => ({
          ...stat,
          value: Math.floor(progress * stat.target)
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    requestAnimationFrame(updateCounters);
  };

  return (
    <section id="stats-section" className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {stat.value}
                <span className="text-indigo-400">{stat.suffix}</span>
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;