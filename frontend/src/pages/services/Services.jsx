// Services.js

import React from "react";
import { Link } from "react-router-dom"; // Assuming you have React Router installed
import "./services.scss"; // Import your SCSS stylesheet

const servicesData = [
  {
    title: "Web Development",
    category: "web",
    description:
      "We create responsive and user-friendly websites tailored to your business needs. Our web development services include front-end and back-end development using the latest technologies.",
  },
  {
    title: "Mobile App Development",
    category: "mobile",
    description:
      "Our mobile app development team specializes in building cross-platform and native mobile applications for iOS and Android. We ensure your app is user-friendly and performs flawlessly.",
  },
  {
    title: "UI/UX Design",
    category: "design",
    description:
      "Our UI/UX design services focus on creating intuitive and visually appealing user interfaces. We prioritize user experience, making your website or app easy to navigate and engaging.",
  },
  {
    title: "E-commerce Solutions",
    category: "ecommerce",
    description:
      "We offer e-commerce solutions that help you sell your products or services online. Our solutions are secure, scalable, and equipped with features to boost your online sales.",
  },
  // Add more services here...
  {
    title: "Digital Marketing",
    category: "marketing",
    description:
      "Boost your online presence with our digital marketing services. We create effective strategies to increase your brand visibility and drive targeted traffic to your website.",
  },
  {
    title: "Cloud Computing",
    category: "cloud",
    description:
      "Harness the power of the cloud with our cloud computing services. We provide scalable and secure cloud solutions to optimize your business operations and improve efficiency.",
  },
];

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={`/services/${service.category}`} className="service-link">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
