import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={styles.footer}
    >
      <div style={styles.container}>
        <div>
          <h4 style={styles.heading}>About NeilStore</h4>
          <p style={styles.text}>
            NeilStore is a fictional e-commerce organization built to
            showcase a modern, scalable shopping experience.
          </p>
        </div>

        <div>
          <h4 style={styles.heading}>Quick Links</h4>
          <p style={styles.text}>About Us</p>
          <p style={styles.text}>Careers</p>
          <p style={styles.text}>Privacy Policy</p>
          <p style={styles.text}>Terms</p>
        </div>

        <div>
          <h4 style={styles.heading}>Contact</h4>
          <p style={styles.text}>support@neilstore.com</p>
          <p style={styles.text}>+91 90000 00000</p>
          <p style={styles.text}>India</p>
        </div>

        <div>
          <h4 style={styles.heading}>Account</h4>
          <Link to="/login">
            <button style={styles.signBtn}>Sign In</button>
          </Link>
        </div>
      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} NeilStore
      </div>
    </motion.footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#EFE6D8",
    borderTop: "1px solid #E2D6C3",
    marginTop: "60px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
  },
  heading: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  text: {
    fontSize: "13px",
    color: "#6B6B6B",
    lineHeight: "1.6",
  },
  signBtn: {
    backgroundColor: "#C6A969",
    color: "#fff",
    border: "1px solid #B89655",
    padding: "8px 14px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
  },
  bottom: {
    textAlign: "center",
    padding: "12px",
    fontSize: "12px",
    color: "#6B6B6B",
    borderTop: "1px solid #E2D6C3",
  },
};

export default Footer;
