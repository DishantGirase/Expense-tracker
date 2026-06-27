import styles from "./totalSpent.module.css";
const TotalSpent = () => {
  return (
    <div className={styles.totalBox}>
      <div className={styles.totalLabel}>Total spent</div>
      <div className={styles.totalAmount}>₹1,650</div>
    </div>
  );
};
export default TotalSpent;
