import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Offrir des fleurs à doudou", done: false },
    { id: 3, text: "Faire un bisou à doudou", done: false },
  ],
  reducers: {
    addTask: (state, action) => {
      // state = état
      // action = {type: "todo/addTask", payload: "Aller faire les courses"}
      const newTask = {
        id: Date.now(),
        text: action.payload,
        done: false,
      };
      state.push(newTask);
    },

    deleteTask: (state, action) => {
      // action = {type: "todo/deleteTask", payload: 20}
      return (state = state.filter((el) => el.id !== action.payload));
    },

    toggleTask: (state, action) => {
      // action = {type: "todo/toggleTask", payload: 20}
      const task = state.find((el) => el.id === action.payload);
      if (task !== null) {
        task.done = !task.done;
      }
    },
  },
});

export const { addTask, toggleTask, deleteTask } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todokikou: todoSlice.reducer,
  },
});
