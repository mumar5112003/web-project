// Portfolio.js

import React from "react";
import "./portfolio.scss"; // Import your SCSS stylesheet

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/readme-banner.png",
    desc: "Build your online store with React Commerce. We offer a feature-rich e-commerce solution with a modern and responsive user interface, making it easy for you to manage products and reach your customers.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Create a stunning blog using Next.js. Our Next.js blog templates provide a clean and elegant design for your articles. Share your thoughts with the world in style.",
  },
  {
    id: 3,
    title: "Flutter Mobile App",
    img: "https://th.bing.com/th/id/R.1013c59f20691d57906b1242a26ca529?rik=xkl0aVovgTmWIg&pid=ImgRaw&r=0",
    desc: "Turn your app idea into reality with our Flutter mobile app development services. We specialize in building high-performance, cross-platform mobile applications for both Android and iOS. Reach a wider audience with a single codebase.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://th.bing.com/th/id/R.1f6a3f164aa9a0f2221b75b715c74909?rik=gw4Yu1TcL6m89A&pid=ImgRaw&r=0",
    desc: "Experience the joy of music with our Music App. Discover and stream your favorite songs, create playlists, and enjoy a personalized music experience. Your music journey starts here.",
  },
  // Add 10 more items here...
  {
    id: 5,
    title: "E-commerce Platform",
    img: "https://i0.wp.com/themes.svn.wordpress.org/shopfront-ecommerce/0.2.9/screenshot.png",
    desc: "Power your online business with our E-commerce Platform. An all-in-one solution for managing products, processing orders, and enhancing the shopping experience for your customers.",
  },
  {
    id: 6,
    title: "Travel App",
    img: "https://splitmetrics.com/wp-content/uploads/2023/04/A130-img1-v2.png",
    desc: "Explore the world with our Travel App. Plan your trips, discover new destinations, and make memories. Your next adventure is just a click away.",
  },
  {
    id: 7,
    title: "Fitness Tracker",
    img: "https://media.self.com/photos/5e7536c5a70d2e0008d0a5d5/2:1/w_2580,c_limit/product-roundup_workout.jpg",
    desc: "Stay fit and healthy with our Fitness Tracker app. Monitor your workouts, set goals, and track your progress. Your personal fitness journey begins here.",
  },
  {
    id: 8,
    title: "Job Search Portal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXJK8lajLskVdKV775VmLmf3FNOLds7fS_OragmQUccui7e4PuyLerrOc5NBxhe22-Pw&usqp=CAU",
    desc: "Find your dream job with our Job Search Portal. Explore job opportunities, build your resume, and connect with employers. Your career path awaits.",
  },
  {
    id: 9,
    title: "Recipe App",
    img: "https://techcrunch.com/wp-content/uploads/2022/01/Multi-Device.jpg",
    desc: "Cook delicious meals with our Recipe App. Discover new recipes, plan your meals, and become a master chef in your kitchen.",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Portfolio</h1>
      <div className="portfolio-items">
        {items.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img src={item.img} alt={item.title} />
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
