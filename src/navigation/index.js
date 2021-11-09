import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../screens/Home";

import Favorites from "../screens/Favorites";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default index;
