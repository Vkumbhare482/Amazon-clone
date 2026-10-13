/* REACT */
export { useState, useContext } from "react";

/* ROUTER */
export {
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

/* ANIMATION */
export { motion } from "framer-motion";

/* CONTEXTS */
export { AuthContext } from "../context/AuthContext";
export { CartContext } from "../context/CartContext";

/* COMPONENTS */
export { default as Navbar } from "../components/Navbar";
export { default as SubNavbar } from "../components/SubNavbar";
export { default as ProductCard } from "../components/ProductCard";
export { default as Footer } from "../components/Footer";

/* PAGES */
export { default as Login } from "../pages/Login";
export { default as Signup } from "../pages/Signup";
export { default as ForgotPassword } from "../pages/ForgotPassword";
export { default as ProductDetails } from "../pages/ProductDetails";
export { default as Cart } from "../pages/Cart";

/* DATA */
export { default as products } from "../data/products";
