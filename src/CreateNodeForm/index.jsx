import React, { useState } from "react";
import styles from "./index.module.css";

const CreateNodeForm = () => {
  const [formData, setFormData] = useState({
    nodeInfo: "",
    typeOfNode: "",
  });

  const { nodeInfo, typeOfNode } = formData;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const saveAddressToLocalStorage = (event) => {
    event.preventDefault();
    localStorage.setItem("newNodeData", JSON.stringify(formData));
  };

  return (
    <div className={styles["form-container"]}>
      <h3>Add New Type Of Node</h3>
      <form>
        <div className={styles["form-field"]}>
          <input
            type="text"
            placeholder="Enter node info here"
            name="nodeInfo"
            value={nodeInfo}
            required
            onChange={(event) => handleChange(event)}
            autoComplete="off"
          />
        </div>
        <div className={styles["form-field"]}>
          <select
            name="typeOfNode"
            value={typeOfNode}
            onChange={(event) => handleChange(event)}
          >
            <option value="newLlm">New LLM</option>
            <option value="newText">New Text</option>
          </select>
        </div>
        <button onClick={saveAddressToLocalStorage}>Add Node</button>
      </form>
    </div>
  );
};

export default CreateNodeForm;
