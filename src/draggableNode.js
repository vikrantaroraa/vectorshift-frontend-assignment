// draggableNode.js

export const DraggableNode = ({ type, label, nodeInfo, newNodeType }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType, nodeInfo, newNodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "80px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        borderRadius: "4px",
        backgroundColor: "#bc7dff",
        justifyContent: "center",
        flexDirection: "column",
      }}
      draggable
    >
      <span style={{ color: "#fff" }}>{label}</span>
    </div>
  );
};
