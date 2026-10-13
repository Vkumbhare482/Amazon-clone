import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar({ search, setSearch }) {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const totalQty = cartItems.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <header style={styles.header}>
      {/* LEFT */}
      <div style={styles.left}>
        <Link to="/" style={styles.logo}>
          neil<span style={{ color: "#f08804" }}>store</span>
        </Link>

        <div style={styles.location}>
          <span style={styles.smallText}>Deliver to</span>
          <span style={styles.boldText}>India</span>
        </div>
      </div>

      {/* SEARCH */}
      <div style={styles.searchBox}>
        <select style={styles.select}>
          <option>All</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home</option>
        </select>

        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />

        <button style={styles.searchBtn}>🔍</button>
      </div>

      {/* RIGHT */}
      <div style={styles.right}>
        <div style={styles.navItem}>
          <span style={styles.smallText}>
            Hello, {user ? user.email : "Sign in"}
          </span>
          {user ? (
            <span onClick={logout} style={styles.boldText}>
              Logout
            </span>
          ) : (
            <Link to="/login" style={styles.boldLink}>
              Account & Lists
            </Link>
          )}
        </div>

        <div style={styles.navItem}>
          <span style={styles.smallText}>Returns</span>
          <span style={styles.boldText}>& Orders</span>
        </div>

        <Link to="/cart" style={styles.cart}>
          🛒
          <span style={styles.cartCount}>{totalQty}</span>
          <span style={styles.boldText}>Cart</span>
        </Link>
      </div>
    </header>
  );
}

const styles = {
  header: {
    height: "60px",
    backgroundColor: "#131921",
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    color: "white",
    gap: "12px",
  },

  /* LEFT */
  left: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    minWidth: "220px",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "700",
    color: "white",
    textDecoration: "none",
  },
  location: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },

  /* SEARCH */
  searchBox: {
    display: "flex",
    flex: 1,
    height: "40px",
    borderRadius: "4px",
    overflow: "hidden",
    backgroundColor: "white",
  },
  select: {
    border: "none",
    padding: "0 8px",
    backgroundColor: "#e6e6e6",
    fontSize: "12px",
    outline: "none",
  },
  searchInput: {
    flex: 1,
    border: "none",
    padding: "0 10px",
    fontSize: "14px",
    outline: "none",
  },
  searchBtn: {
    width: "45px",
    border: "none",
    backgroundColor: "#f08804",
    cursor: "pointer",
    fontSize: "18px",
  },

  /* RIGHT */
  right: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    minWidth: "300px",
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  cart: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: "white",
    textDecoration: "none",
    position: "relative",
  },
  cartCount: {
    position: "absolute",
    top: "-6px",
    left: "14px",
    color: "#f08804",
    fontWeight: "700",
    fontSize: "14px",
  },

  /* TEXT */
  smallText: {
    fontSize: "11px",
    color: "#ccc",
  },
  boldText: {
    fontSize: "13px",
    fontWeight: "700",
  },
  boldLink: {
    fontSize: "13px",
    fontWeight: "700",
    color: "white",
    textDecoration: "none",
  },
};

export default Navbar;
