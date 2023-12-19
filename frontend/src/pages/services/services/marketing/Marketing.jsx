// Marketing.js
import React from "react";
import "./marketing.scss";

const Marketing = () => {
  return (
    <div className="digital-marketing-detail">
      <h2>Digital Marketing Solutions</h2>
      <div className="overview">
        <h3>Overview</h3>
        <p>
          Propel your business to new heights with our Digital Marketing
          solutions. We leverage cutting-edge strategies and tools to enhance
          your online presence, drive traffic, and engage with your target
          audience effectively.
        </p>
      </div>
      <div className="key-services">
        <h3>Key Services</h3>
        <ul>
          <li>Search Engine Optimization (SEO)</li>
          <li>Pay-Per-Click (PPC) Advertising</li>
          <li>Social Media Marketing</li>
          <li>Email Marketing</li>
          <li>Content Marketing</li>
          <li>Analytics and Reporting</li>
        </ul>
      </div>
      <div className="success-campaigns">
        <h3>Successful Campaigns</h3>
        <div className="campaign-list">
          <p>
            Our SEO strategies have significantly improved search rankings,
            leading to a 30% increase in organic traffic for our clients.
          </p>
          <p>
            The targeted PPC campaigns resulted in a 20% boost in conversion
            rates, maximizing return on investment.
          </p>
          {/* Add more campaign details as needed */}
        </div>
      </div>
    </div>
  );
};

export default Marketing;
