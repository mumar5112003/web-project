import React from "react";
import "./about.scss";
const About = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Aestechs</h1>
        <p>Empowering Innovation, Driving Success</p>
      </header>

      <section class="content">
        <h2>Who We Are</h2>
        <p>
          Founded in [Year], Your Software Company is a premier provider of
          tailored software solutions that transcend conventional boundaries. We
          specialize in creating intelligent, scalable, and secure software
          applications designed to meet the unique challenges faced by
          businesses in the modern digital landscape.
        </p>

        <h2>Our Mission</h2>
        <p>
          At Your Software Company, our mission is to empower organizations by
          delivering cutting-edge software solutions that drive operational
          excellence, enhance efficiency, and foster innovation. We are
          committed to being a strategic partner in our clients' success,
          ensuring their sustained growth in a rapidly evolving business
          environment.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision a future where technology seamlessly integrates with
          business processes, transforming industries and empowering enterprises
          to reach new heights. Our vision is to be a global leader in software
          innovation, recognized for our unwavering commitment to quality,
          integrity, and client satisfaction.
        </p>

        <h2>Client Testimonials</h2>
        <div class="testimonial">
          <p>
            "Working with Your Software Company has been a transformative
            experience for our business. Their expertise, attention to detail,
            and commitment to excellence have significantly contributed to our
            success."
          </p>
          <p class="client">- Sarah Johnson, CEO, XYZ Solutions</p>
        </div>

        <div class="testimonial">
          <p>
            "The team at Your Software Company is not just a service provider;
            they are true partners. Their collaborative approach, technical
            prowess, and dedication to delivering results make them stand out in
            the industry."
          </p>
          <p class="client">- Michael Rodriguez, COO, ABC Innovations</p>
        </div>
      </section>
    </div>
  );
};

export default About;
