import styles from "./inputExpense.module.css";
const InputExpense = ({
  inputName,
  inputAmount,
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
          value={inputName}
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
          value={inputAmount}
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
