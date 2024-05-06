import React from "react";
import "./TaskItem.scss";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../../redux.js";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  const handleChangeDone = () => {
    dispatch(toggleTask(task.id));
  };

  const handleClickRemove = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="item-main-container">
      <label className="label-item">
        <div className="input-text">
          <input
            type="checkbox"
            checked={task.done}
            onChange={handleChangeDone}
          />
          <p>{task.text}.</p>
        </div>
        <button type="button" onClick={handleClickRemove}>
          x
        </button>
      </label>
    </div>
  );
}

export default TaskItem;
