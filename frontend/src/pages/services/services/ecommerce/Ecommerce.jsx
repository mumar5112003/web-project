// Ecommerce.js
import React from "react";
import "./ecommerce.scss";

const Ecommerce = () => {
  return (
    <div className="ecommerce-detail">
      <h2>E-commerce Solutions</h2>
      <div className="overview">
        <h3>Overview</h3>
        <p>
          Revolutionize your online business with our E-commerce solutions. We
          provide secure, scalable, and feature-rich platforms to boost your
          online sales and enhance the shopping experience for your customers.
        </p>
      </div>
      <div className="key-features">
        <h3>Key Features</h3>
        <ul>
          <li>Custom E-commerce Development</li>
          <li>Payment Gateway Integration</li>
          <li>Shopping Cart Solutions</li>
          <li>Product Management</li>
          <li>Order Processing</li>
          <li>Responsive Design</li>
        </ul>
      </div>
      <div className="customer-testimonials">
        <h3 style={{ marginBottom: "10px" }}>Customer Testimonials</h3>
        <div className="testimonial-list">
          <blockquote>
            <p>
              "Working with this E-commerce solution has been a game-changer for
              our business. The customization options and seamless integration
              make it the perfect choice for online retailers."
            </p>
            <cite>- John Doe, CEO of ABC Store</cite>
          </blockquote>
          <blockquote>
            <p>
              "The simplicity and effectiveness of this E-commerce platform have
              significantly improved our online sales. It's a pleasure to
              recommend this solution to fellow entrepreneurs."
            </p>
            <cite>- Jane Smith, Founder of XYZ Boutique</cite>
          </blockquote>
          {/* Add more testimonials as needed */}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
