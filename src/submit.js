// submit.js
import styles from "./submit.module.css";

export const SubmitButton = () => {
  return (
    <div className={styles["container"]}>
      <button type="submit">Submit</button>
    </div>
  );
};
