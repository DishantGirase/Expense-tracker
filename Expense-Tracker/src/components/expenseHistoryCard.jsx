import deleteIcon from "../assets/delete-icon.png";
import styles from "./expenseHistoryCard.module.css";
const ExpenseHistoryCard = ({ name, id, amount, handleOnDelete, date }) => {
  return (
    <>
      {" "}
      <div className={styles.cardContainer}>
        <div className={styles.expenseInfoContainer}>
          <div className={styles.expenseName}>{name}</div>
          <div className={styles.expenseDate}>{date}</div>
        </div>
        <div className={styles.expenseRight}>
          <div className={styles.expenseAmount}>{`₹ ${amount}`}</div>
          <div className={styles.btnDelete}>
            <img
              src={deleteIcon}
              alt="delete"
              onClick={() => {
                handleOnDelete(id);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ExpenseHistoryCard;
