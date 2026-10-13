import { useState, Navbar, SubNavbar, Footer } from "../config/imports";
import AppRoutes from "./AppRoutes";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <SubNavbar />

      <div style={styles.container}>
        <AppRoutes search={search} />
      </div>

      <Footer />
    </>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "30px auto",
    padding: "0 20px",
  },
};

export default App;
