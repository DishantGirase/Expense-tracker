import styles from "./container.module.css";
const Container = (props) => {
  return (
    <div className={`container ${styles.custom - style}`}>{props.children}</div>
  );
};
export default Container;
