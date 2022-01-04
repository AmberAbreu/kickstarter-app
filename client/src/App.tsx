import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./components/Login";
import Campaigns from "./components/Campaigns";
import SingleCampaign from "./components/SingleCampaign";
import CreateCampaign from "./components/formComponents/CreateCampaign";
import Register from "./components/Register";
// import DonateButton from "./components/DonateButton";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaigns/:id" element={<SingleCampaign />} />
          <Route path="/create" element={<CreateCampaign />} />
          <Route path="/signup" element={<Register />} />
          {/* <Route path="/donate" element={<DonateButton />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
