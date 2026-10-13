function SubNavbar() {
  return (
    <div style={styles.bar}>
      <span style={styles.item}>☰ All</span>
      <span style={styles.item}>Today's Deals</span>
      <span style={styles.item}>Electronics</span>
      <span style={styles.item}>Fashion</span>
      <span style={styles.item}>Home & Kitchen</span>
      <span style={styles.item}>Mobiles</span>
      <span style={styles.item}>Customer Service</span>
      <span style={styles.item}>Prime</span>
    </div>
  );
}

const styles = {
  bar: {
    height: "40px",
    backgroundColor: "#232f3e",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    padding: "0 18px",
    color: "white",
    fontSize: "13px",
  },
  item: {
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
};

export default SubNavbar;
