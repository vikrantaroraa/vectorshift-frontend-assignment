// toolbar.js

import { DraggableNode } from "./draggableNode";
import styles from "./toolbar.module.css";

export const PipelineToolbar = () => {
  return (
    <div className={styles["container"]}>
      <span>
        You can drag these nodes and drop them on the canvas to create a new
        node.
      </span>
      <div className={styles["nodes-container"]}>
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
      </div>
    </div>
  );
};
