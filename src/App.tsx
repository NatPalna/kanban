import { useEffect, useState } from "react";
import "./assets/styles/main.css";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Task } from "./types";

function App() {
  const storage = localStorage.getItem("tasks");

  const [task, setTask] = useState<Task[]>(storage ? JSON.parse(storage) : []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  return (
    <>
      <Header />
      <main>
        <Card title="Backlog" />
        <Card title="Ready" />
        <Card title="In Progress" />
        <Card title="Finished" />
      </main>
      <Footer />
    </>
  );
}

export default App;
