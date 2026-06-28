import styles from "./inputExpense.module.css";
const InputExpense = ({
  handleOnChangeName,
  handleOnClickAddBtn,
  handleOnChangeAmount,
}) => {
  return (
    <>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>
          Expense name
        </label>
        <input
          className={styles.formInput}
          type="text"
          id="name"
          placeholder="eg.,Coffee,Gas,Rent"
          onChange={(event) => {
            handleOnChangeName(event);
          }}
        />
        <label htmlFor="amount" className={styles.formLabel}>
          Amount (₹)
        </label>
        <input
          className={styles.formInput}
          type="number"
          id="amount"
          placeholder="0.00"
          onChange={(event) => {
            handleOnChangeAmount(event);
          }}
        />
      </div>
      <div class="d-grid gap-2">
        <button
          class="btn btn-primary"
          type="button"
          onClick={(event) => {
            handleOnClickAddBtn(event);
          }}
        >
          + Add expense
        </button>
      </div>
    </>
  );
};
export default InputExpense;
