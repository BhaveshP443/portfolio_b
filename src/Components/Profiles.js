import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodechef, SiCodeforces, SiLeetcode } from 'react-icons/si';
const Profiles = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Mobile screen size breakpoint
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleProfiles = () => {
    setIsOpen(!isOpen);
  };

  if (!isMobile) return null; // Don't render on larger screens

  return (
    <div>
      {/* View Profile Button */}
      <button
        onClick={toggleProfiles}
        className="fixed bottom-5 right-5 w-12 h-12 bg-gradient text-white rounded-full flex items-center justify-center z-50 hover:opacity-90 transition-opacity"
      >
        <span className="text-sm font-semibold">Profiles</span>
      </button>

      {/* Full Overlay for Modal */}
      
      
      {/* Profile Modal with Solid Brown Background */}
      {isOpen && (
        <div className=" fixed bottom-20 right-5 w-auto bg-gradient text-white rounded-lg shadow-lg z-50 p-4">
          <div className="flex flex-col items-center gap-4 bg-">
            {/* Profile Links with Logos */}
            <a
        href="https://github.com/BhaveshP443" // Replace with your GitHub profile URL
        target="_blank"
              rel="noopener noreferrer"
              className="text-dark-heading dark:text-light-heading hover:text-gradient transition-colors"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
        href="https://linkedin.com/in/bhavesh-patidar" // Replace with your LinkedIn profile URL
        target="_blank"
              rel="noopener noreferrer"
              className="text-dark-heading dark:text-light-heading hover:text-gradient transition-colors"
            >
              < FaLinkedin className='w-8 h-8'/>
            </a>
            <a
        href="https://codeforces.com/profile/Bhavesh_443" // Replace with your LinkedIn profile URL
        target="_blank"
              rel="noopener noreferrer"
              className="text-dark-heading dark:text-light-heading hover:text-gradient transition-colors"
            >
              <SiCodeforces className='w-8 h-8'/>
            </a>
            <a
        href="https://www.codechef.com/users/bhavesh443" // Replace with your LinkedIn profile URL
        target="_blank"
              rel="noopener noreferrer"
              className="text-dark-heading dark:text-light-heading hover:text-gradient transition-colors"
            >
              <SiCodechef className='w-8 h-8'/>
            </a>
            <a
              href="https://leetcode.com/u/bhaveshpatidar443/" // Replace with your LeetCode profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-heading dark:text-light-heading hover:text-gradient transition-colors"
            >
              <SiLeetcode className='w-8 h-8'/>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profiles;
