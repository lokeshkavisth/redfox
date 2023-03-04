import React, { Component } from "react";
import TopNavbar from "./components/TopNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsCard from "./components/NewsCard";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export class App extends Component {
  render() {
    return (
      <div>
        <TopNavbar />
        <Routes>
          <Route index element={<NewsCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
