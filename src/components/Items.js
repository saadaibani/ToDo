import React from "react";

function Items({ task, deleteTask, toggleCompleted, toggleBookmark }) {
  function handleChange() {
    toggleCompleted(task.id);
  }
  return (
    <div className="item">
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </p>
      <button onClick={() => toggleBookmark(task.id)}>
        {task.bookmarked ? "Unbookmark" : "Bookmark"}
      </button>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}
export default Items;
