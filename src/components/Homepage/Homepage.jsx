import React from "react";
import Hero from "../Hero/Hero";
import Work from "../Work/Work";
// import Headingcomponent from "../HeadingComponent/Headingcomponent";
import ImageText from "../Image-text-Container/Image_text";
import Company from "../Company/Company";
import Testimonial from "../Testimonial/Testimonial";
import Environment from "../Environment/Environment";
import Instantdev from "../Headcomponets/Instantdev";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Work />
      <Company />
      {/* <Headingcomponent /> */}
      <Instantdev/>
      <ImageText />
      <Testimonial/>
      <Environment/>
    </>
  );
};

export default Homepage;
