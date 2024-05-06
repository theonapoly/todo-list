import React from "react";
import "./TaskHeader.scss";
import { useSelector } from "react-redux";

function TaskHeader() {
  const tasks = useSelector((el) => el.todokikou);

  const undoneTask = tasks.filter((el) => el.done === false);

  console.log(undoneTask);
  return (
    <header className="header-main-container">
      <h1>To Do List</h1>
      <p>Nombre de tâches restantes</p>
      <p className="numb-tasks">{undoneTask.length}</p>
    </header>
  );
}

export default TaskHeader;
