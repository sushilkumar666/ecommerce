import "./App.css";
import HomePageBanner from "./components/HomePageBanner.jsx";
import Category from "./components/Category.jsx";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Category />
      <HomePageBanner></HomePageBanner>
      <Card></Card>
      <Footer />
    </>
  );
}

export default App;
