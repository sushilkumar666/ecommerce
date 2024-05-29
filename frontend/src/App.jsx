import "./App.css";
import HomePageBanner from "./components/HomePageBanner.jsx";
import Category from "./components/Category.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Category />
      <HomePageBanner></HomePageBanner>
    </>
  );
}

export default App;
