import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      style={styles.card}
    >
      <Link to={`/product/${product.id}`} style={styles.link}>
        <div style={styles.imageWrapper}>
          <img
            src={product.image}
            alt={product.name}
            style={styles.image}
          />
        </div>

        <h4 style={styles.title}>{product.name}</h4>
        <div style={styles.rating}>⭐ {product.rating}</div>
        <div style={styles.price}>
          ₹{product.price.toLocaleString()}
        </div>
      </Link>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        style={styles.btn}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "6px",
    padding: "12px",
    border: "1px solid #E2D6C3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
    color: "#2E2E2E",
  },
  imageWrapper: {
    height: "170px",
    background: "#F7F3EE",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    marginBottom: "10px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  title: {
    fontSize: "14px",
    fontWeight: "500",
    height: "38px",
    overflow: "hidden",
    marginBottom: "6px",
  },
  rating: {
    fontSize: "13px",
    color: "#B89655",
    marginBottom: "6px",
  },
  price: {
    fontSize: "16px",
    fontWeight: "700",
  },
  btn: {
    marginTop: "10px",
    backgroundColor: "#C6A969",
    color: "#fff",
    border: "1px solid #B89655",
    padding: "8px",
    borderRadius: "4px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default ProductCard;
