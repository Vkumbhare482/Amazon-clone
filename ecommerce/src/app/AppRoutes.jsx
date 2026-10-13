import {
  Routes,
  Route,
  ProductCard,
  ProductDetails,
  Cart,
  Login,
  Signup,
  ForgotPassword,
  products,
} from "../config/imports";

function AppRoutes({ search }) {
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Routes>
      {/* HOME */}
      <Route
        path="/"
        element={
          <div style={styles.grid}>
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        }
      />

      {/* PRODUCT */}
      <Route path="/product/:id" element={<ProductDetails />} />

      {/* CART */}
      <Route path="/cart" element={<Cart />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />
    </Routes>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
};

export default AppRoutes;
