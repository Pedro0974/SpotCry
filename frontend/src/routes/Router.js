// routes/Router.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeView } from "../pages/HomeView";
import { LoginView } from "../pages/LoginView";

const Router = () => (
  <Routes>
    <Route path="/" element={<HomeView />} />
    <Route path="/login" element={<LoginView />} />
  </Routes>
);

export default Router;