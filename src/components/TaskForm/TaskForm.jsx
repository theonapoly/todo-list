import React from "react";
import "./TaskForm.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux";

function TaskForm() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(text));
    setText("");
  };

  return (
    <div className="form-main-container">
      <form onSubmit={handleSubmit}>
        <input
          className="input-form"
          type="text"
          placeholder="Ajouter une tâche"
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default TaskForm;
