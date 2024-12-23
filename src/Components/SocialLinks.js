import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { SiCodechef } from "react-icons/si";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex fixed left-10 top-1/3 flex-col items-center gap-6 p-4">
      {/* GitHub Link */}
      <a
        href="https://github.com/bhaveshP443" // Replace with your GitHub profile URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark-heading dark:text-light-heading hover:text-gradient transition-colors"
      >
        <FaGithub className="w-8 h-8" />
      </a>

      {/* LinkedIn Link */}
      <a
        href="https://leetcode.com/u/bhaveshpatidar443/" // Replace with your LinkedIn profile URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark-heading dark:text-light-heading hover:text-gradient transition-colors"
      >
        <SiLeetcode className="w-8 h-8" />
      </a>

      <a
        href="https://codeforces.com/profile/Bhavesh_443" // Replace with your LinkedIn profile URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark-heading dark:text-light-heading hover:text-gradient transition-colors"
      >
        <SiCodeforces className="w-8 h-8" />
      </a>
      <a
        href="https://www.codechef.com/users/bhavesh443" // Replace with your LinkedIn profile URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark-heading dark:text-light-heading hover:text-gradient transition-colors"
      >
        <SiCodechef className="w-8 h-8" />
      </a>

      <a
        href="https://linkedin.com/in/bhavesh-patidar" // Replace with your LinkedIn profile URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark-heading dark:text-light-heading hover:text-gradient transition-colors"
      >
        <FaLinkedin className="w-8 h-8" />
      </a>
    </div>
  );
};

export default SocialLinks;
