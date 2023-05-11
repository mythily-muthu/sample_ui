import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Business from "../Pages/Business";
import Portfolio from "../Pages/Portfolio";
import Personal from "../Pages/Personal";
import Event from "../Pages/Event";
import Blog from "../Pages/Blog";
import ComingSoon from "../Pages/ComingSoon";
import Others from "../Pages/Others";

const Content = () => {
  return (
    <div>
      {/* routes */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/event" element={<Event />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/others" element={<Others />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Content;
