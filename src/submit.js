// submit.js
import styles from "./submit.module.css";

export const SubmitButton = () => {
  const extractAndSubmitData = async (event) => {
    event.preventDefault();
    const flowData = JSON.parse(localStorage.getItem("pipeline-flow"));
    try {
      const endpoint = "http://localhost:8000/pipelines/parse";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(flowData),
      });
      if (response.ok) {
        console.log("request submitted succesfully");
        const res = await response.json();
        alert(JSON.stringify(res));
      } else {
        console.log("request failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles["container"]}>
      <button type="submit" onClick={extractAndSubmitData}>
        Submit
      </button>
    </div>
  );
};
