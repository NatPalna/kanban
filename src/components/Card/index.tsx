import React from "react";
import { Cards } from "../../types";
import { AddButton } from "./AddButton";
import style from "./style.module.css";

export const Card: React.FC<Cards> = ({ title }) => {
  return (
    <div className={style.card}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.tasks}>
        <li className={style.task}>Task 1</li>
        <li className={style.task}>Task 2</li>
      </ul>
      <AddButton task={[]} setTask={setTask} />
    </div>
  );
};
