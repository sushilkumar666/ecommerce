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
<<<<<<< HEAD
import Cart from "../components/Cart";
=======
import MyModalHandler from "../components/modal/MyModalHandler";
>>>>>>> 2024c8bbfd9bc3a8af780a84c53fb0c8c9f45193

function Home() {
  return (
    <div>
      {/* <Category />
    
      
     

      <ProductDetail />
      <CreateProductForm />
      <AddAndUpdateCategory /> */}
      {/* <AdminDashboard /> */}
      {/* <Cart /> */}
      <HomePageBanner />
      <Card />
      <div className="flex bg-gray-100">
        <Filter />
        <SearchProducts />
      </div>
<<<<<<< HEAD
=======
      <ProductDetail /> */}
      {/* <AdminDashboard /> */}
      {/* <CreateProductForm /> */}
      <AddAndUpdateCategory />
      <MyModalHandler />

>>>>>>> 2024c8bbfd9bc3a8af780a84c53fb0c8c9f45193
    </div>
  );
}

export default Home;
