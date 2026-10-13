import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div style={styles.container}>
      {/* LEFT IMAGE */}
      <div style={styles.imageBox}>
        <img src={product.image} alt={product.name} style={styles.image} />
      </div>

      {/* CENTER DETAILS */}
      <div style={styles.details}>
        <h2 style={styles.title}>{product.name}</h2>
        <div style={styles.rating}>⭐ {product.rating}</div>
        <hr />

        <p style={styles.price}>
          ₹{product.price.toLocaleString()}
        </p>

        <p style={styles.stock}>In stock</p>

        <p style={styles.desc}>
          This is a premium product built for demonstration purposes.
          It reflects a real Amazon-style product description layout.
        </p>
      </div>

      {/* RIGHT BUY BOX */}
      <div style={styles.buyBox}>
        <p style={styles.priceBig}>
          ₹{product.price.toLocaleString()}
        </p>

        <p style={styles.delivery}>
          FREE delivery <b>Tomorrow</b>
        </p>

        <p style={styles.stock}>In stock</p>

        <button
          style={styles.cartBtn}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

        <button style={styles.buyBtn}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr 1fr",
    gap: "30px",
    padding: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  imageBox: {
    background: "#fff",
    padding: "20px",
    border: "1px solid #ddd",
  },
  image: {
    width: "100%",
    objectFit: "contain",
  },
  details: {
    background: "#fff",
    padding: "20px",
    border: "1px solid #ddd",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
  },
  rating: {
    color: "#f08804",
    margin: "8px 0",
  },
  price: {
    fontSize: "22px",
    fontWeight: "700",
  },
  desc: {
    fontSize: "14px",
    color: "#555",
    marginTop: "10px",
  },
  buyBox: {
    background: "#fff",
    padding: "20px",
    border: "1px solid #ddd",
    height: "fit-content",
  },
  priceBig: {
    fontSize: "22px",
    fontWeight: "700",
  },
  delivery: {
    fontSize: "14px",
    margin: "10px 0",
  },
  stock: {
    color: "green",
    fontWeight: "600",
  },
  cartBtn: {
    width: "100%",
    padding: "10px",
    background: "#FFD814",
    border: "1px solid #FCD200",
    cursor: "pointer",
    marginTop: "10px",
  },
  buyBtn: {
    width: "100%",
    padding: "10px",
    background: "#FFA41C",
    border: "1px solid #FF8F00",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default ProductDetails;
