import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./components/Login";
import Campaigns from "./components/Campaigns";
import SingleCampaign from "./components/SingleCampaign";
import CreateCampaign from "./components/formComponents/CreateCampaign";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaigns/:id" element={<SingleCampaign />} />
          <Route path="/create" element={<CreateCampaign />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
