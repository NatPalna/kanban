import { useMemo, useState } from "react";
import "./assets/styles/main.css";
import Column from "./components/Columns";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

type Task = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [backlog, setBacklog] = useState([]);

  const columns = useMemo(() => {
    return [
      {
        title: "Backlog",
        tasks: backlog,
        select: null,
      },
      {
        title: "Ready",
        tasks: [],
        select: backlog,
      },
      {
        title: "In Progress",
        tasks: [],
        select: [],
      },
      {
        title: "Finished",
        tasks: [],
        select: [],
      },
    ];
  }, []);

  return (
    <>
      <Header />
      <main>
        {columns.map((item) => (
          <Column title={item.title} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
