import React from "react";
import HomePageBanner from "../components/HomePageBanner";
import Category from "../components/Category";
import Card from "../components/Card";
import Filter from "../components/Filter";
import SearchProducts from "../components/SearchProducts";
import ProductDetail from "../components/ProductDetails/ProductDetail";
import AdminDashboard from "../components/AdminDashboard";
import CreateProductForm from "../components/CreateProductForm";
import AddAndUpdateCategory from "../components/AddAndUpdateCategory";
import MyModalHandler from "../components/modal/MyModalHandler";

function Home() {
  return (
    <div>
      {/* <Category />
      <HomePageBanner />
      <Card />
      <div className="flex bg-gray-100">
        <Filter />
        <SearchProducts />
      </div>
      <ProductDetail /> */}
      {/* <AdminDashboard /> */}
      {/* <CreateProductForm /> */}
      <AddAndUpdateCategory />
      <MyModalHandler />

    </div>
  );
}

export default Home;
