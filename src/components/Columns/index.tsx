import { AddTask } from "./AddTask";
import style from "./style.module.css";

type Columns = {
  title: string;
};

const Column = ({ title }: Columns) => {
  return (
    <div className={style.card}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.tasks}>
        <li className={style.task}>Task 1</li>
        <li className={style.task}>Task 2</li>
      </ul>
      <AddTask />
    </div>
  );
};

export default Column;
