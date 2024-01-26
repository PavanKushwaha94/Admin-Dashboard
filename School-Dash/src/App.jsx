import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
