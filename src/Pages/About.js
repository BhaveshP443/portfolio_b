import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-24 pb-20"> {/* Adjusted top padding */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-blue-500">
        <span className="bg-gradient-to-r from-purple-500  via-blue-500 to-green-500 bg-clip-text text-transparent">
            About me
            </span>
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-blue-500">
        <span className="bg-gradient-to-r from-purple-500  via-blue-500 to-green-500 bg-clip-text text-transparent">
          Work Experience
            </span>
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-blue-500">
          <span className="bg-gradient-to-r from-purple-500  via-blue-500 to-green-500 bg-clip-text text-transparent">
            Education
            </span>
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
