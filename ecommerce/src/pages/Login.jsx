import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // fake login success
    login(email);
    navigate("/");
  }

  return (
    <div style={styles.page}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.card}
      >
        {/* LOGO */}
        <h2 style={styles.logo}>
          neil<span style={{ color: "#f08804" }}>store</span>
        </h2>

        <h3 style={styles.title}>Sign in</h3>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            style={styles.signInBtn}
          >
            Sign In
          </motion.button>
        </form>

        <Link to="/forgot-password" style={styles.link}>
          Forgot your password?
        </Link>

        <p style={styles.terms}>
          By continuing, you agree to NeilStore's{" "}
          <span style={styles.linkInline}>Conditions of Use</span> and{" "}
          <span style={styles.linkInline}>Privacy Notice</span>.
        </p>

        <div style={styles.divider}>New to NeilStore?</div>

        <Link to="/signup">
          <button style={styles.createBtn}>
            Create your NeilStore account
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#F7F3EE",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: "380px",
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
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #a6a6a6",
    marginTop: "4px",
  },
  signInBtn: {
    width: "100%",
    marginTop: "18px",
    padding: "10px",
    backgroundColor: "#FFD814",
    border: "1px solid #FCD200",
    fontWeight: "600",
    cursor: "pointer",
    borderRadius: "4px",
  },
  error: {
    background: "#fdecea",
    color: "#b12704",
    padding: "8px",
    borderRadius: "4px",
    fontSize: "13px",
    marginBottom: "10px",
  },
  link: {
    display: "block",
    marginTop: "12px",
    fontSize: "13px",
    color: "#0066c0",
    textDecoration: "none",
  },
  linkInline: {
    color: "#0066c0",
    cursor: "pointer",
  },
  terms: {
    fontSize: "12px",
    color: "#555",
    marginTop: "14px",
    lineHeight: "1.5",
  },
  divider: {
    margin: "20px 0 10px",
    fontSize: "12px",
    color: "#767676",
    textAlign: "center",
  },
  createBtn: {
    width: "100%",
    padding: "10px",
    fontSize: "13px",
    cursor: "pointer",
    borderRadius: "4px",
    border: "1px solid #adb1b8",
    backgroundColor: "#f0f2f2",
  },
};

export default Login;
