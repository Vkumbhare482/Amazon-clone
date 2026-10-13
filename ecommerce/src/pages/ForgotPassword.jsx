import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div style={styles.page}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        style={styles.card}
      >
        <h3 style={styles.title}>Password assistance</h3>

        {sent ? (
          <p style={styles.success}>
            We sent a password reset link to <b>{email}</b>
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label style={styles.label}>Email</label>
            <input
              style={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button style={styles.primaryBtn}>
              Continue
            </button>
          </form>
        )}

        <Link to="/login" style={styles.link}>
          Back to Sign in
        </Link>
      </motion.div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F7F3EE",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    background: "#fff",
    padding: "28px",
    width: "100%",
    maxWidth: "380px",
    borderRadius: "6px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  title: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "14px",
  },
  label: {
    fontSize: "13px",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #a6a6a6",
    borderRadius: "4px",
    margin: "6px 0 14px",
  },
  primaryBtn: {
    width: "100%",
    padding: "10px",
    background: "#FFD814",
    border: "1px solid #FCD200",
    fontWeight: "600",
    cursor: "pointer",
  },
  success: {
    fontSize: "14px",
    color: "green",
  },
  link: {
    display: "block",
    marginTop: "14px",
    fontSize: "13px",
    color: "#0066c0",
    textDecoration: "none",
  },
};

export default ForgotPassword;
