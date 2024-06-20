import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles["app"]}>
      <div className={styles["canvas-container"]}>
        <PipelineUI />
      </div>
      <div className={styles["nodes-and-submit-button"]}>
        <PipelineToolbar />
        <hr />
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
