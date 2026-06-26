import styles from "./inputExpense.module.css";
const InputExpense = () => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor="name" className={styles.formLabel}>
        Expense name
      </label>
      <input
        className={styles.formInput}
        type="text"
        id="name"
        placeholder="eg.,Coffee,Gas,Rent"
      />
      <label htmlFor="amount" className={styles.formLabel}>
        Amount (₹)
      </label>
      <input
        className={styles.formInput}
        type="text"
        id="amount"
        placeholder="0.00"
      />
    </div>
  );
};
export default InputExpense;
