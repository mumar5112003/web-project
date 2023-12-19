import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { color, motion } from "framer-motion";
import { useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Aestechs
        </motion.span>

        <div className="social">
          {user ? (
            <Avatar style={{ background: "orange" }}>
              {user.result.picture ? (
                <img
                  src={user.result.picture}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                user.result.name.charAt(0)
              )}
            </Avatar>
          ) : null}
          {user ? (
            <Typography
              src={user.result.imageUrl}
              alt={user.result.name}
              variant="h6"
            >
              {user.result.name}
            </Typography>
          ) : null}
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
