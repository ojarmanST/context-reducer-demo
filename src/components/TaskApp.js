import "../App.css";

import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import { TasksProvider } from "./TasksContext.js";

/*
 * Reducers let you consolidate a component’s state update logic.
 * Context lets you pass information deep down to other components.
 * You can combine reducers and context together to manage state of a complex screen.
 */
export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
