// Web.js

import React from "react";
import "./web.scss"; // Import your SCSS stylesheet

const Web = () => {
  return (
    <div className="web-development-detail">
      <h2>Web Development Services</h2>
      <div className="overview">
        <h3>Overview</h3>
        <p>
          We offer comprehensive web development services to bring your digital
          presence to life. Whether you need a stunning website, a powerful web
          application, or an e-commerce platform, our team of skilled developers
          is here to turn your vision into reality.
        </p>
      </div>
      <div className="technologies">
        <h3>Technologies We Use</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (React, Angular, Vue.js)</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Database (MongoDB, MySQL)</li>
        </ul>
      </div>
      <div className="features">
        <h3>Key Features</h3>
        <ul>
          <li>Responsive Design</li>
          <li>Custom Development</li>
          <li>Scalable Architecture</li>
          <li>SEO Optimization</li>
          <li>Performance Optimization</li>
          <li>Security Implementation</li>
        </ul>
      </div>
      <div className="projects">
        <h3>Projects Showcase</h3>
        <div className="project-grid">
          {/* Placeholder images, replace with actual project images */}
          <img
            src="https://www.webfx.com/wp-content/uploads/2023/10/example-of-beautiful-websites-2-slack.png"
            alt="Project 1"
          />
          <img
            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp"
            alt="Project 2"
          />
          <img
            src="https://blog.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/25%20Stunning%20Corporate%20Websites%20to%20Inspire%20Yours-Mar-08-2022-08-40-14-29-PM.jpeg?width=650&name=25%20Stunning%20Corporate%20Websites%20to%20Inspire%20Yours-Mar-08-2022-08-40-14-29-PM.jpeg"
            alt="Project 3"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRnZxh4wBt2Lvh_PRDE9aZ167y0LblKCt1VQ&usqp=CAU"
            alt="Project 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Web;
