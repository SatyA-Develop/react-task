import React from "react";
import Hero from "../Hero/Hero";
import Work from "../Work/Work";
import Headingcomponent from "../HeadingComponent/Headingcomponent";
import ImageText from "../Image-text-Container/Image_text";
import Company from "../Company/Company";
import Testimonial from "../Testimonial/Testimonial";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Work />
      <Company />
      <Headingcomponent />
      <ImageText />
      <Testimonial/>
    </>
  );
};

export default Homepage;
