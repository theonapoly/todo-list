import { Provider } from "react-redux";
import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskHeader from "./components/TaskHeader/TaskHeader";
import TaskList from "./components/TaskList/TaskList";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div className="app-main-container">
        <TaskHeader />
        <TaskList />
        <TaskForm />
      </div>
    </Provider>
  );
}

export default App;
