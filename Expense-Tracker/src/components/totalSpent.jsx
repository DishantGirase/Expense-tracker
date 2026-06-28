import styles from "./totalSpent.module.css";
const TotalSpent = ({ expenses }) => {
  let total = 0;
  expenses.map(({ amount }) => (total += amount));
  return (
    <div className={styles.totalBox}>
      <div className={styles.totalLabel}>Total spent</div>
      <div className={styles.totalAmount}>{total}</div>
    </div>
  );
};
export default TotalSpent;
