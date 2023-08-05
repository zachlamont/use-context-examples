import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyApp from "./components/Example1";
import MyApp1 from "./components/Example2";
import MyApp3 from "./components/Example3";
import MyApp4 from "./components/Example4";
import TaskApp from "./components/Example5/Example5";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <MyApp />
      <MyApp1 />
      <MyApp3 />
      <MyApp4 />
      <TaskApp />
    </>
  );
}

export default App;
