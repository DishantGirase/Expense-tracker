import ExpenseHistoryCard from "./expenseHistoryCard";
import styles from "./ExpenseHistoryContainer.module.css";
const ExpenseHistoryContainer = ({ expenses, handleOnDelete, formatDate }) => {
  return (
    <>
      {" "}
      <div className={styles.container}>
        <h5 className={styles.sectionTitle}>Recent expenses</h5>
        {expenses.map((expense) => (
          <ExpenseHistoryCard
            id={expense.id}
            key={expense.id}
            name={expense.name}
            amount={expense.amount}
            date={<p>Date: {formatDate(expense.createdAt)}</p>}
            handleOnDelete={handleOnDelete}
          />
        ))}
      </div>
    </>
  );
};
export default ExpenseHistoryContainer;
