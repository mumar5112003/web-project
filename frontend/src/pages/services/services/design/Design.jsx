// Design.js
import React from "react";
import "./design.scss";

const Design = () => {
  return (
    <div className="ux-design-detail">
      <h2>UI/UX Design Services</h2>
      <div className="overview">
        <h3>Overview</h3>
        <p>
          Elevate your brand with our UI/UX design services. We focus on
          creating visually appealing and intuitive user interfaces, ensuring a
          seamless and engaging user experience.
        </p>
      </div>
      <div className="creative-process">
        <h3>Creative Process</h3>
        <p>
          Our creative process involves collaboration, ideation, and meticulous
          design. We work closely with clients to understand their vision and
          deliver designs that align with their brand identity.
        </p>
      </div>
      <div className="key-features">
        <h3>Key Features</h3>
        <ul>
          <li>UI Design</li>
          <li>UX Research</li>
          <li>Wireframing and Prototyping</li>
          <li>Usability Testing</li>
          <li>Interaction Design</li>
          <li>Responsive Design</li>
        </ul>
      </div>
      <div className="portfolio">
        <h3>Portfolio</h3>
        <div className="portfolio-grid">
          {/* Placeholder images, replace with actual design screenshots */}
          <img
            src="https://graphicdesigneye.com/images/UI-Ux-Design-0.jpg"
            alt="Design Example 1"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYcgnaLICEZriyby9Syn8tt-_DjFUm__U3Q&usqp=CAU"
            alt="Design Example 2"
          />
          <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/323511187/original/275a846cbce322d7adde9772115fff81515c7001/do-ui-ux-design-mobile-app-ui-ux-design-and-website-ui-ux-design.png"
            alt="Design Example 3"
          />
          {/* Add more portfolio items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Design;
