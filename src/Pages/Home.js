import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import { useNavigate } from "react-router-dom";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  const ctaRef = useRef();
  const Navigate=useNavigate();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.4,
        opacity: 0,
        duration: 1.5,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.2,
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 1.5,
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.4,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        ctaRef.current,
        {
          y: "50%",
          delay: 0.2,
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
        },
        "<1"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section flex flex-col items-center justify-between text-white" style={{ height: "100vh" }}>
      {/* Upper Section (60% height of the screen) */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between" style={{ flex: "6" }}>
        {/* Text Section (Name & Tagline) */}
        <div className="w-full md:w-1/2 space-y-2 md:space-y-4 text-center md:text-right mt-5 md:mt-0">
          <div>
            <h1
              ref={h11}
              className="text-2xl text-white md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            >
              My Name is
            </h1>
          </div>
          <div>
            <h1
              ref={h12}
              className="text-2xl bg-clip-text bg-gradient-to-r from-yellow-600 via-blue-500 to-red-500 text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            >
              {name}
            </h1>
          </div>
          <div>
            <h2
              ref={h13}
              className="text-xl text-white md:text-3xl xl:text-4xl xl:leading-tight font-medium"
            >
              {tagline}
            </h2>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-5 md:mt-0">
          <img
            ref={myimageref}
            className="w-2/3 md:w-1/2 rounded-full shadow-lg"
            src={img}
            alt="Bhavesh Patidar"
          />
        </div>
      </div>
      {/* Lower Section (40% height of the screen) */}
      <div
        ref={ctaRef}
        className="w-full flex flex-col items-center justify-center space-y-8"
        style={{ flex: "4", padding: "20px" }}
      >
        <p className="text-xl md:text-2xl xl:text-3xl text-center max-w-3xl leading-relaxed text-white">
          I'm a <span className="text-purple-400 font-medium">Full Stack Web Developer</span> {" "}
          {/* <span className="text-orange-400 font-medium">Cyber security Researcher</span>{" "} */}
          specializing in building exceptional websites.
        </p>
        <button 
          className="px-8 py-3 text-white font-medium text-lg rounded-full bg-gradient-to-r from-purple-400 to-orange-500 hover:from-purple-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          onClick={() => Navigate('/contact')}
        >
          Hire Me
        </button>
      </div>
    </main>
  );
}

export default Home;