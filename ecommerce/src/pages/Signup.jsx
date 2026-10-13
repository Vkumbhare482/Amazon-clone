import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // fake signup success
    navigate("/login");
  }

  return (
    <div style={styles.page}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.card}
      >
        <h2 style={styles.logo}>
          neil<span style={{ color: "#f08804" }}>store</span>
        </h2>

        <h3 style={styles.title}>Create account</h3>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Your name</label>
          <input
            style={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={styles.primaryBtn}
          >
            Create your account
          </motion.button>
        </form>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Sign in
          </Link>
        </p>
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
    padding: "20px",
  },
  card: {
    background: "#fff",
    maxWidth: "400px",
    width: "100%",
    padding: "28px",
    borderRadius: "6px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  logo: {
    textAlign: "center",
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  title: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "14px",
  },
  label: {
    fontSize: "13px",
    fontWeight: "600",
    marginTop: "10px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #a6a6a6",
    marginTop: "4px",
  },
  primaryBtn: {
    marginTop: "18px",
    width: "100%",
    padding: "10px",
    background: "#FFD814",
    border: "1px solid #FCD200",
    fontWeight: "600",
    cursor: "pointer",
  },
  error: {
    background: "#fdecea",
    color: "#b12704",
    padding: "8px",
    borderRadius: "4px",
    fontSize: "13px",
    marginBottom: "10px",
  },
  footerText: {
    fontSize: "13px",
    marginTop: "16px",
  },
  link: {
    color: "#0066c0",
    textDecoration: "none",
  },
};

export default Signup;
