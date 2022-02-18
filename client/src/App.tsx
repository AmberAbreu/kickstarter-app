import React from "react";
import "@stripe/stripe-js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./pages/Login";
import Campaigns from "./pages/Campaigns";
import SingleCampaignDetails from "./pages/SingleCampaignDetails";
import CreateCampaign from "./pages/CreateCampaign";
import Register from "./pages/Register";
import Success from "./pages/Success";
import Canceled from "./pages/Canceled";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaigns/:id" element={<SingleCampaignDetails />} />
          <Route path="/create" element={<CreateCampaign />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/success" element={<Success />} />
          <Route path="/canceled" element={<Canceled />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
