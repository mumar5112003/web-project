// Mobile.js

import React from "react";
import "./mobile.scss"; // Import your SCSS stylesheet

const Mobile = () => {
  return (
    <div className="mobile-app-development-detail">
      <h2>Mobile App Development Services</h2>
      <div className="overview">
        <h3>Overview</h3>
        <p>
          Transform your ideas into powerful and engaging mobile applications.
          Our mobile app development services cover a wide spectrum, including
          cross-platform development, native iOS app development, and more.
        </p>
      </div>
      <div className="cross-platform">
        <h3>Cross-Platform Development</h3>
        <p>
          Embrace the efficiency of cross-platform development with frameworks
          like React Native and Flutter. Reach a broader audience by deploying
          your app on both iOS and Android platforms simultaneously.
        </p>
      </div>
      <div className="native-ios">
        <h3>Native iOS App Development</h3>
        <p>
          Elevate your brand in the Apple ecosystem with our native iOS app
          development services. We leverage the latest iOS technologies to
          create seamless and intuitive experiences for iPhone and iPad users.
        </p>
      </div>
      <div className="features">
        <h3>Key Features</h3>
        <ul>
          <li>Cross-platform Development (React Native, Flutter)</li>
          <li>Swift and Objective-C for Native iOS</li>
          <li>UI/UX Design for Mobile</li>
          <li>Integration with Backend Services</li>
          <li>Push Notifications</li>
          <li>App Maintenance and Support</li>
        </ul>
      </div>
      <div className="screenshots">
        <h3>App Showcase</h3>
        <div className="screenshot-carousel">
          {/* Placeholder images, replace with actual app screenshots */}
          <img
            src="https://miro.medium.com/v2/resize:fit:1014/1*Fgm5OdUWiLrSK8-aakUb3A.jpeg"
            alt="App Screenshot 1"
          />
          <img
            src="https://cdn.sanity.io/images/ordgikwe/production/7656257b8e32a20981d5a4f330af74c25333d536-700x551.jpg?w=635&h=500&auto=format"
            alt="App Screenshot 2"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPooY4jJABYiaPpOW2CSbgCBcYteXJKJP-tw&usqp=CAU"
            alt="App Screenshot 3"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWujeW0c3HW8SQeufsyzI24s5dxXgUBQ06Q&usqp=CAU"
            alt="App Screenshot 4"
          />
          <img
            src="https://fireartstudio.s3-accelerate.amazonaws.com/wp-content/uploads/2018/09/image11-850x638-1.jpg"
            alt="App Screenshot 3"
          />
          <img
            src="https://www.softwareistic.com/assets/images/ecommerce.png"
            alt="App Screenshot 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
