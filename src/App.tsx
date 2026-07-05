import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AddedToCartModal from "./components/AddedToCartModal/AddedToCartModal";
import CartModal from "./components/CartModal/CartModal";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";

import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />

      <AddedToCartModal />
      <CartModal />
    </>
  );
}
