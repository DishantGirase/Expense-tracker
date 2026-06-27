import deleteIcon from "../assets/delete-icon.png";
import styles from "./expenseHistoryCard.module.css";
const ExpenseHistoryCard = () => {
  return (
    <>
      {" "}
      <div className={styles.cardContainer}>
        <div className={styles.expenseInfoContainer}>
          <div className={styles.expenseName}>Groceries</div>
          <div className={styles.expenseDate}>Yesterday</div>
        </div>
        <div className={styles.expenseRight}>
          <div className={styles.expenseAmount}>₹850</div>
          <div className={styles.btnDelete}>{deleteIcon}</div>
        </div>
      </div>
    </>
  );
};
export default ExpenseHistoryCard;
