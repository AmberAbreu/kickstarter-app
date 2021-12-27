import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Campaigns from "./components/Campaigns";
import SingleCampaign from "./components/SingleCampaign";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="campaigns/:id" element={<SingleCampaign />} />
        <Route path="test" element={<SingleCampaign />} />
      </Routes>
    </Router>
  );
}

export default App;
