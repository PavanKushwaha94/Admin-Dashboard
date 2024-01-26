import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function Admin() {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Home />
    </div>
  );
}

export default Admin;
