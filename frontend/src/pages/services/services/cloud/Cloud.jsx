// Cloud.js
import React from "react";
import "./cloud.scss";

const Cloud = () => {
  return (
    <div className="cloud-computing-detail">
      <h2>Cloud Computing Solutions</h2>
      <div className="overview">
        <h3>Overview</h3>
        <p>
          Elevate your business to the next level with our Cloud Computing
          solutions. Harness the power of cloud technology to improve
          scalability, security, and efficiency in managing your data and
          applications.
        </p>
      </div>
      <div className="key-features">
        <h3>Key Features</h3>
        <ul>
          <li>Cloud Infrastructure Management</li>
          <li>Data Storage and Backup Solutions</li>
          <li>Scalable Computing Resources</li>
          <li>Serverless Computing</li>
          <li>Security and Compliance</li>
          <li>Cost Optimization</li>
        </ul>
      </div>
      <div className="success-stories">
        <h3 style={{ marginBottom: "10px" }}>Client Success Stories</h3>
        <div className="story-list">
          <blockquote>
            <p>
              "Implementing cloud-based solutions has transformed our business
              operations. The scalability and security provided have exceeded
              our expectations."
            </p>
            <cite>- Mary Johnson, CTO of Tech Innovators</cite>
          </blockquote>
          <blockquote>
            <p>
              "With serverless computing, we've achieved significant cost
              savings and improved the performance of our applications. A
              game-changer for our development team."
            </p>
            <cite>- Mark Davis, CEO of Cloud Innovations</cite>
          </blockquote>
          {/* Add more success stories as needed */}
        </div>
      </div>
    </div>
  );
};

export default Cloud;
