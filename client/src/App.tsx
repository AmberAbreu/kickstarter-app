import React from "react";
import "@stripe/stripe-js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./components/Login";
import Campaigns from "./components/Campaigns";
import SingleCampaign from "./components/SingleCampaign";
import CreateCampaign from "./components/formComponents/CreateCampaign";
import Register from "./components/Register";
import Success from "./components/Success";
import Canceled from "./components/Canceled";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaigns/:id" element={<SingleCampaign />} />
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
