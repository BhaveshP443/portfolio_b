
import { MainProject, Project } from "../Components/Project";
import { OtherprojectDetails, projectDetails } from "../Details";

// function Projects() {
//   return (
//     <main className="container  mx-auto max-width pt-24 pb-20">
//       <section > 
//         <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-semibold border-b-2 border-blue-500">
//         <span className="bg-gradient-to-r from-purple-500  via-blue-500 to-green-500 bg-clip-text text-transparent">
//             PROJECTS
//             </span>
//         </h1>
//         <div className="grid grid-cols-1  ">
//           {React.Children.toArray(
//             projectDetails.map(
//               ({ title, image, description, techstack, previewLink, githubLink, reverseOrder}) => (
//                 <MainProject
//                   title={title}
//                   image={image}
//                   description={description}
//                   techstack={techstack}
//                   previewLink={previewLink}
//                   githubLink={githubLink}
//                   reverseOrder={reverseOrder}

//                 />
//               )
//             )
//           )}
//         </div>

//       </section>
//       <section>
//       <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-semibold  pt-10 border-b-2 border-blue-500">
//       <span className="bg-gradient-to-r from-purple-500  via-blue-500 to-green-500 bg-clip-text text-transparent">
//            OTHER PROJECTS
//             </span>
//         </h1>
//         <div className="lg:px-10 grid md:grid-cols-2 lg:grid-cols-2 gap-x-10 ">
//           {React.Children.toArray(
//             OtherprojectDetails.map(
//               ({ title, image, description, techstack, previewLink, githubLink }) => (
//                 <Project
//                   title={title}
//                   image={image}
//                   description={description}
//                   techstack={techstack}
//                   previewLink={previewLink}
//                   githubLink={githubLink}
//                 />
//               )
//             )
//           )}
//         </div>
//       </section>
//     </main>

//   );
// }


// import React, { useState } from 'react';

// function Projects() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % projectDetails.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? projectDetails.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <main className="container mx-auto max-width pt-24 pb-20">
//       <section>
//         <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-semibold border-b-2 border-blue-500">
//           <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
//             PROJECTS
//           </span>
//         </h1>

//         {/* Horizontal Scroll Container */}
//         <div className="relative">
//           {/* Previous Button */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full z-10"
//           >
//             &#8592;
//           </button>

//           {/* Scrollable Container for Projects */}
//           <div className="flex overflow-x-auto scroll-smooth space-x-6 py-6">
//             {projectDetails.map((project, index) => (
//               <div
//                 key={index}
//                 className={`flex-none w-full max-w-xs ${
//                   index === currentIndex ? 'block' : 'hidden'
//                 }`}
//               >
//                 <MainProject
//                   title={project.title}
//                   image={project.image}
//                   description={project.description}
//                   techstack={project.techstack}
//                   previewLink={project.previewLink}
//                   githubLink={project.githubLink}
//                   reverseOrder={project.reverseOrder}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Next Button */}
//           <button
//             onClick={handleNext}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full z-10"
//           >
//             &#8594;
//           </button>
//         </div>
//       </section>

//       <section>
//         <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-semibold pt-10 border-b-2 border-blue-500">
//           <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
//             OTHER PROJECTS
//           </span>
//         </h1>
//         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-10">
//           {React.Children.toArray(
//             OtherprojectDetails.map(
//               ({ title, image, description, techstack, previewLink, githubLink }) => (
//                 <Project
//                   title={title}
//                   image={image}
//                   description={description}
//                   techstack={techstack}
//                   previewLink={previewLink}
//                   githubLink={githubLink}
//                 />
//               )
//             )
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }



import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
     // Moving forward
    setCurrentIndex((prev) => (prev + 1) % OtherprojectDetails.length);
  };

  const handlePrev = () => {
     // Moving backward
    setCurrentIndex((prev) =>
      prev === 0 ? OtherprojectDetails.length - 1 : prev - 1
    );
  };

  return (
    <main className="container mx-auto max-width pt-24 pb-20">
      {/* Projects Section: Normal Grid Layout */}
      

      <section >
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-semibold border-b-2 border-blue-500">
          <span className="bg-gradient-to-r from-purple-500  via-blue-500 to-green-500 bg-clip-text text-transparent">
            PROJECTS
          </span>
        </h1>
        <div className="grid grid-cols-1  ">
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink, reverseOrder }) => (
                <MainProject
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                  reverseOrder={reverseOrder}

                />
              )
            )
          )}
        </div>

</section>

<section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-semibold pt-10 border-b-2 border-blue-500">
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
            OTHER PROJECTS
          </span>
        </h1>

        {/* Render Horizontal Scroll with Animation for Mobile */}
        {isMobile ? (
          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 
                ${currentIndex === 0 ? 'bg-blue-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'} 
                p-2 rounded-full z-10`}
            >
              &#8592;
            </button>

            {/* Animated Scrollable Container */}
            <div className="flex overflow-x-auto py-6 space-x-6 ">
              <AnimatePresence mode="wait">
                {/* Dynamically animate the project based on the direction */}
                {OtherprojectDetails.map((project, index) =>
                  index === currentIndex ? (
                    <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 0, // Slide direction based on navigation
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1, // Scale to full size
                        y: 0, // Stay at the center vertically
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        y: 50, // Move down when exiting
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 600,
                        damping: 50,
                      }}
                      className="flex-none w-full max-w-xs"
                    >
                      <Project
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        techstack={project.techstack}
                        previewLink={project.previewLink}
                        githubLink={project.githubLink}
                      />
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentIndex === OtherprojectDetails.length - 1}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 
                ${currentIndex === OtherprojectDetails.length - 1 ? 'bg-blue-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'} 
                p-2 rounded-full z-10`}
            >
              &#8594;
            </button>
          </div>
        ) : (
          // Regular Grid Layout for Larger Screens with Animation
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:px-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {OtherprojectDetails.map((project, index) => (
              <motion.div
                key={project.title} // Use project title as key to ensure uniqueness
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Project
                  title={project.title}
                  image={project.image}
                  description={project.description}
                  techstack={project.techstack}
                  previewLink={project.previewLink}
                  githubLink={project.githubLink}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </main>
  );
}

export default Projects;




