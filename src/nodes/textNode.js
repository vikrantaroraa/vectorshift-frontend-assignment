// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import styles from "./textNode.module.css";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["heading"]}>
        <span>Text</span>
      </div>
      <div className={styles["node-body"]}>
        <label className={styles["node-data"]}>
          <span>Text</span>
          <input type="text" value={currText} onChange={handleTextChange} />
        </label>
      </div>
      <Handle
        className={styles["source-handle"]}
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
};
