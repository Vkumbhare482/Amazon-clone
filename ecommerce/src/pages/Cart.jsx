import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={styles.container}>
      {/* LEFT */}
      <div style={styles.items}>
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 && <p>Your cart is empty</p>}

        {cartItems.map((item) => (
          <div key={item.id} style={styles.item}>
            <img src={item.image} style={styles.image} />

            <div style={styles.info}>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>

              <div style={styles.qty}>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <button
                style={styles.remove}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div style={styles.summary}>
        <h3>
          Subtotal ({cartItems.length} items):{" "}
          <b>₹{subtotal.toLocaleString()}</b>
        </h3>

        <button style={styles.checkout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
    gap: "30px",
    maxWidth: "1200px",
    margin: "30px auto",
    padding: "0 20px",
  },
  items: {
    background: "#fff",
    padding: "20px",
    border: "1px solid #ddd",
  },
  item: {
    display: "flex",
    gap: "20px",
    borderBottom: "1px solid #ddd",
    padding: "15px 0",
  },
  image: {
    width: "120px",
    objectFit: "contain",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  qty: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  remove: {
    background: "none",
    border: "none",
    color: "#007185",
    cursor: "pointer",
    textAlign: "left",
  },
  summary: {
    background: "#fff",
    padding: "20px",
    border: "1px solid #ddd",
    height: "fit-content",
  },
  checkout: {
    width: "100%",
    marginTop: "15px",
    padding: "10px",
    background: "#FFD814",
    border: "1px solid #FCD200",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Cart;
