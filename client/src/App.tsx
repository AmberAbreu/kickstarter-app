import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Campaigns from "./components/Campaigns";
import SingleCampaign from "./components/SingleCampaign";
import CreateCampaign from "./components/formComponents/CreateCampaign";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/campaigns/:id" element={<SingleCampaign />} />
        <Route path="/create" element={<CreateCampaign />} />
      </Routes>
    </Router>
  );
}

export default App;
