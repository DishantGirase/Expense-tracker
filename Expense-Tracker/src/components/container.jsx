import styles from "./container.module.css";
const Container = (props) => {
  return (
    <div className={`container ${styles.customStyle}`}>{props.children}</div>
  );
};
export default Container;
