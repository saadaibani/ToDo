import { React, useState } from "react";
import Items from "./Items";

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task 1",
      completed: true,
      bookmarked: false,
    },
    {
      id: 2,
      text: "Task 2",
      completed: false,
      bookmarked: false,
    },
  ]);
  const [text, setText] = useState("");
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      bookmarked: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  function toggleBookmark(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, bookmarked: !task.bookmarked };
        } else {
          return task;
        }
      })
    );
  }

  const bookTasks = tasks.filter((task) => task.bookmarked);
  const unbookTasks = tasks.filter((task) => !task.bookmarked);

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        <h2>Tasks</h2>
        {unbookTasks.map((task) => (
          <Items
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
            toggleBookmark={toggleBookmark}
          />
        ))}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={() => addTask(text)}>Add</button>
      </div>
      <div className="bookmarked-list">
        <h2>Bookmarked Tasks</h2>
        {bookTasks.map((task) => (
          <Items
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
            toggleBookmark={toggleBookmark}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
