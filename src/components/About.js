import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            At our restaurant, we believe great food begins with the freshest ingredients. Every dish we create is crafted with care, using locally sourced produce, premium meats, and bold, vibrant flavors that excite the palate. From our signature dishes to morning favorites, we’re committed to delivering a dining experience that feels both wholesome and indulgent.
            </p>
            <p>
            What truly sets us apart is our dedication to quality and creativity. Our chefs bring passion and innovation to every meal, blending traditional cooking techniques with a modern twist. Whether you're starting your day with us or enjoying a hearty meal, you’ll find dishes that are thoughtfully prepared, sustainable, and full of flavor.

            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
