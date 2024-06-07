/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Details
 */

import React from "react";

import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import ProfileButtons from "../profile/ProfileButtons";
import Projects from "./Projects";

const Details: React.FC = () => {
  return (
    <div>
      <About />
      <Experience />
      <Projects />
      <Education />
      <ProfileButtons />
    </div>
  );
};

export default Details;
