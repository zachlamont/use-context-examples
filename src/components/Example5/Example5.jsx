/*

Example 5 of 5: Scaling up with context and a reducer 
In larger apps, it is common to combine context with a reducer to extract the logic related to some state out of components. In this example, all the “wiring” is hidden in the TasksContext.js, which contains a reducer and two separate contexts.


*/

import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import { TasksProvider } from "./TasksContext.jsx";

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
