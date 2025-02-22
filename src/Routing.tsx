import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiscInDom from "./pages/misc";
import HomepageInDom from "./pages/home";
import TestInDom from "./pages/test";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomepageInDom />} />
      <Route path="/test" element={<TestInDom />} />
      <Route path="/misc" element={<MiscInDom />} />
    </Routes>
  );
};

export default Routing;
