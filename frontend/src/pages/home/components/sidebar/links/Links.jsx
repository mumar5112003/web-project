import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const items = [
    { name: "Homepage", link: "" },
    user ? { name: "Projects", link: "projects" } : {},
    { name: "Services", link: "services" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Team", link: "team" },
    { name: "Contact", link: "contact" },
    { name: "About", link: "about" },

    user
      ? { name: "Logout", link: "" }
      : { name: "Login/Signup", link: "auth" },
  ];
  const logout = () => {
    console.log("logged out");
    dispatch({ type: "LOGOUT" });

    setUser(null);
    useEffect(() => {
      history("/");
    }, []);
  };
  return (
    <motion.div className="links" variants={variants}>
      {items.map(({ name, link }) => (
        <motion.a
          key={name}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={`/${link}`}
            onClick={() => (user && name === "Logout" ? logout() : null)}
          >
            {name}
          </Link>
        </motion.a>
      ))}
      <a href={"https://aestechs-admin.netlify.app/"}>Admin</a>
    </motion.div>
  );
};

export default Links;
