import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
