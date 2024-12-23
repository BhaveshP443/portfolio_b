import React from "react";
import { ExternalLink, Github } from 'lucide-react';

import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isLargeScreen;
};




// function Project({ title, image, description, techstack, previewLink, githubLink }) {
//   return (
//     <article className="rounded-2xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 transition-transform  duration-500 ease-in-out hover:scale-110">
      
//       <img src={image} alt="" loading="lazy" />
//       <div className="dark:bg-dark-card p-4 transition-colors duration-500">
//         <h1 className="dark:text-light-heading font-semibold text-lg ">{title}</h1>
//         <p className="bg-dark-mode rounded-lg text-content pt-2 font-light">{description}</p>
//         <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
//           Tech Stack : <span className="font-light">{techstack}</span>
//         </h3>
//         <div className="flex justify-end mt-5 px-5 gap-4">
//           <a
//             href={"https://nutritiouswhimsicalcache.bhavesh-patidar.repl.co/"}
//             target="_blank"
//             rel="noreferrer noopener"
//             className="flex items-center gap-2 font-light text-slate-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
//           >
//             <ExternalLink size={30} />
//           </a>
          
//           <a
//             href={githubLink}
//             target="_blank"
//             rel="noreferrer noopener"
//             className="flex items-center gap-2 font-light text-slate-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
//           >
//             <Github size={30} />
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// }






// const MainProject = ({ 
//   title, 
//   image, 
//   description, 
//   techstack, 
//   previewLink, 
//   githubLink, 
//   reverseOrder = false, // New prop to reverse the order
// }) => {
//   return (
//     <article
//       className={`rounded-xl mt-10 overflow-hidden shadow-xl ${
//         reverseOrder ? 'flex-row-reverse' : 'flex-row' // Apply reverseOrder conditionally
//       } flex justify-between text-justify transition-all duration-300 hover:-translate-y-2`}
//     >
//       <div className="w-1/2 relative"> {/* Image section */}
//         <img 
//           src={image} 
//           alt={`${title} preview`} 
//           loading="lazy" 
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="dark:bg-slate-800 p-6 transition-colors duration-500 w-1/2 "> {/* Text section */}
//         <h1 className={`text-3xl font-semibold dark:text-white pt-1 ${reverseOrder ? 'flex justify-start' : 'flex justify-end text-justify'}`}>
//           <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-yellow-500 bg-clip-text text-transparent">
//             {title}
//           </span>
//         </h1>
//         <div className="bg-dark-mode text-white p-3 rounded-lg shadow-lg">
//         <p className="text-slate-600  dark:text-slate-300  font-light">
//           {description}
//         </p>
 
//         </div>
 
        
//         <h3 className="text-slate-800 dark:text-white font-medium pt-4">
//           Tech Stack: <span className="font-light">{techstack}</span>
//         </h3>
        
//         <div className={`flex justify-start mt-5 px-5 gap-4 ${reverseOrder ? 'flex justify-start' : 'flex justify-end text-end'}`}> {/* Adjusted to align with left */}
//           <a
//             href={previewLink}
//             target="_blank"
//             rel="noreferrer noopener"
//             className="flex items-center gap-2 font-light text-slate-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
//           >
//             <ExternalLink size={30} />
//           </a>
          
//           <a
//             href={githubLink}
//             target="_blank"
//             rel="noreferrer noopener"
//             className="flex items-center gap-2 font-light text-slate-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
//           >
//             <Github size={30} />
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// };
// const MainProject = ({ 
//   title, 
//   image, 
//   description, 
//   techstack, 
//   previewLink, 
//   githubLink, 
//   reverseOrder = false 
// }) => {
//   return (
//     <article
//       className={`rounded-xl mt-10 overflow-hidden shadow-xl ${
//         reverseOrder ? 'lg:flex-row-reverse' : 'lg:flex-row'
//       } flex flex-col h-auto lg:h-[400px] transition-all duration-300 hover:-translate-y-2`}
//     >
//       {/* Image Section */}
//       <div className="w-full lg:w-1/2 relative">
//         <img 
//           src={image} 
//           alt={`${title} preview`} 
//           loading="lazy" 
//           className="w-full h-[250px] lg:h-full object-cover"
//         />
//       </div>

//       {/* Details Section */}
//       <div className="dark:bg-slate-800 p-6 transition-colors duration-500 w-full lg:w-1/2">
//         <h1 className="text-2xl lg:text-3xl font-semibold dark:text-white pt-1">
//           <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-yellow-500 bg-clip-text text-transparent">
//             {title}
//           </span>
//         </h1>

//         <p className="text-slate-600 dark:text-slate-300 pt-4 font-light">
//           {description}
//         </p>

//         <h3 className="text-slate-800 dark:text-white font-medium pt-4">
//           Tech Stack: <span className="font-light">{techstack}</span>
//         </h3>

//         <div className="flex justify-start lg:justify-end mt-5 px-5 gap-4">
//           <a
//             href={previewLink}
//             target="_blank"
//             rel="noreferrer noopener"
//             className="flex items-center gap-2 font-light text-slate-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
//           >
//             <ExternalLink size={30} />
//           </a>

//           <a
//             href={githubLink}
//             target="_blank"
//             rel="noreferrer noopener"
//             className="flex items-center gap-2 font-light text-slate-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
//           >
//             <Github size={30} />
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// };

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  const isLargeScreen=useScreenSize();
  return (
    <article className={`rounded-2xl overflow-hidden shadow-xl border-2 border-blue-700 shadow-slate-300 dark:shadow-slate-900 
    lg:transition-transform lg:duration-500 lg:ease-in-out lg:hover:scale-105 min-h-[300px]
    ${isLargeScreen? 'mt-10':''}`}>
      <div className="flex flex-col h-full">
        {/* Image Section */}
        <div className="h-80">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        
        {/* Description Section */}
        <div className="p-4 dark:bg-dark-card transition-colors duration-500 flex flex-col justify-between flex-grow">
          <h1 className={`dark:text-light-heading font-semibold text-2xl font-serif 
                            ${isLargeScreen? 'text-2xl pb:3':'text:xl pt:1 pb:1'}`}>
          <span className="bg-gradient-to-r from-violet-500 to-yellow-500 bg-clip-text text-transparent">
            {title}
          </span>
          </h1>
          <p className={`bg-dark-mode flex justify-center  rounded-3xl text-slate-600 dark:text-slate-300  pt-2 pb-4 px-6
          ${isLargeScreen? 'text-[17px]':'text-[13px]'}`}
           style={{ fontFamily: "'Bai Jamjuree', 'sans-serif'"}}>
              {description}
          </p>
          <h3 className="text-slate-700 dark:text-slate-400 font-medium">
          Tech Stack: <span className={`bg-gradient-to-r from-white via-blue-500 
                                      to-gray-300 bg-clip-text text-transparent
                                      ${isLargeScreen? 'text-[17px] pt-3':'text-[13px] pt-1'}`}>{techstack}</span>
        </h3>
          <div className={`flex justify-end  px-5  ${isLargeScreen? 'mt-5 gap-4':'mt-2 gap-2'}`}>
            <a
              href={previewLink}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 font-light text-slate-700 dark:text-white
                         hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <ExternalLink size={30} />
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 font-light text-slate-700 dark:text-white hover:text-blue-500
                       dark:hover:text-blue-400 transition-colors"
            >
              <Github size={30} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

const MainProject = ({ 

  title, 
  image, 
  description, 
  techstack, 
  previewLink, 
  githubLink, 
  reverseOrder = false, 
}) => {
  const isLargeScreen=useScreenSize();
  return (
    <article
      className={`rounded-xl  overflow-hidden shadow-xl flex ${
        reverseOrder ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } flex-col h-auto lg:h-[400px] transition-all duration-300 lg:hover:-translate-y-2
       ${isLargeScreen? 'mt-10':'mt-1 pb-4'}`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 relative">
         <img 
      src={image} 
    alt={`${title} preview`} 
    loading="lazy" 
    className="w-full h-auto md:h-60 lg:h-full object-cover"
  />
</div>

      {/* Details Section */}
      <div className="dark:bg-slate-800 p-3  transition-colors duration-500 w-full lg:w-1/2">
        {/* Title */}
        <h1 className={`${isLargeScreen? 'text-3xl pb:3':'text:xl pt:1 pb:1'} font-serif font-semibold  dark:text-white 
                      ${reverseOrder ? 'flex lg:justify-start' : 'flex lg:justify-end'}`}>
          <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-yellow-500 
                            bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        {/* Description */}
        <p className="  bg-dark-mode flex justify-center text-left sm:text-[50px] lg:text-[17px] 
                        rounded-3xl text-slate-600 dark:text-slate-300  pt-2 pb-4 px-6 " 
                    style={{ fontFamily: "'Bai Jamjuree', 'sans-serif'" ,fontSize: isLargeScreen ? '17px' : '12px' }}>
  {description}
</p>


        {/* Tech Stack */}
        <h3 className={`text-slate-700 dark:text-slate-400 font-medium ${isLargeScreen? 'text-[17px] pt-3':'text-[13px] pt-1'}`}>
          Tech Stack: <span className="bg-gradient-to-r from-white via-blue-500 to-gray-300 bg-clip-text text-transparent">{techstack}</span>
        </h3>

        {/* Links */}
        <div className={`  mt-5 px-5 gap-4 flex ${reverseOrder ? 'lg:justify-start sm:justify-end text-justify' : 'justify-end lg:text-justify'} justify-end `}>
          <a
            href={previewLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 font-light text-slate-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={30} />
          </a>
          
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 font-light text-slate-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={30} />
          </a>
        </div>
      </div>
    </article>
  );
};










export  {MainProject,Project};
