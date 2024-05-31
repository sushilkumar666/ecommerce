import "./App.css";
import HomePageBanner from "./components/HomePageBanner.jsx";
import Category from "./components/Category.jsx";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import Filter from "./components/Filter.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
