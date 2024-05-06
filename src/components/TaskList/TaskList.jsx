import React from "react";
import "./TaskList.scss";
import TaskItem from "../TaskItem/TaskItem";
import { useSelector } from "react-redux";

function TaskList() {
  const tasks = useSelector((el) => el.todokikou);
  console.log(tasks);

  return (
    <div className="list-main-container">
      {tasks.map((el) => {
        return <TaskItem task={el} key={el.id} />;
      })}
    </div>
  );
}

export default TaskList;
