import React from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/home/components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Team from "./pages/team/Team.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import Services from "./pages/services/Services.jsx";
import Web from "./pages/services/services/web/Web.jsx";
import Mobile from "./pages/services/services/mobile/Mobile.jsx";
import Design from "./pages/services/services/design/Design.jsx";
import Ecommerce from "./pages/services/services/ecommerce/Ecommerce.jsx";
import Marketing from "./pages/services/services/marketing/Marketing.jsx";
import Cloud from "./pages/services/services/cloud/Cloud.jsx";
import Cursor from "./pages/home/components/cursor/Cursor.jsx";
import Auth from "./pages/Auth/Auth";
import Projects from "./pages/projects/Projects.jsx";
const App = () => {
  return (
    <div>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web" element={<Web />} />
        <Route path="/services/mobile" element={<Mobile />} />
        <Route path="/services/design" element={<Design />} />
        <Route path="/services/ecommerce" element={<Ecommerce />} />
        <Route path="/services/marketing" element={<Marketing />} />
        <Route path="/services/cloud" element={<Cloud />} />
      </Routes>
    </div>
  );
};
export default App;
