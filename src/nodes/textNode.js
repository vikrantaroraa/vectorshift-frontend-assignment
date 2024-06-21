// textNode.js

import { useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";
import styles from "./textNode.module.css";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef();

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    const textareaElement = textareaRef.current;
    console.log(textareaElement);
    textareaElement.setAttribute(
      "style",
      "height:" + textareaElement.scrollHeight + "px;overflow-y:hidden;"
    );
    textareaElement.addEventListener("input", autoGrow, false);
  }, []);

  const autoGrow = () => {
    const textareaElement = textareaRef.current;
    textareaElement.style.height = "auto";
    textareaElement.style.height = textareaElement.scrollHeight + "px";
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["heading"]}>
        <span>Text</span>
      </div>
      <div className={styles["node-body"]}>
        <label className={styles["node-data"]}>
          <span>Text</span>
          <textarea
            type="text"
            value={currText}
            onChange={handleTextChange}
            ref={textareaRef}
            className="nodrag"
          />
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
