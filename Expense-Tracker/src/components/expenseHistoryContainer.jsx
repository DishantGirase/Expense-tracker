import styles from "./ExpenseHistoryContainer.module.css";
import ExpenseHistoryCard from "./expenseHistoryCard";
const ExpenseHistoryContainer = () => {
  return (
    <>
      {" "}
      <div className={styles.container}>
        <h5 className={styles.sectionTitle}>Recent expenses</h5>
        <ExpenseHistoryCard></ExpenseHistoryCard>
      </div>
    </>
  );
};
export default ExpenseHistoryContainer;
