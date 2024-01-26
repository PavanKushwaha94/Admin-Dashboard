import { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import Chart from "./components/Chart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Content />
      <Chart />
      <Footer />
    </>
  );
}

export default App;
