import React from "react";
import { Route, Routes } from "react-router-dom";
import MiscInDom from "./pages/misc";
import HomepageInDom from "./pages/home";
import TestInDom from "./pages/test";

export default function Routing() {
  return (
    <Routes>
      <Route path={"/"} element={HomepageInDom} />
      <Route path={"/test"} element={TestInDom} />
      <Route path={"/misc"} element={MiscInDom} />
    </Routes>
  );
}
