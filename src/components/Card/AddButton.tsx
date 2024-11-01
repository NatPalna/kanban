import style from "./style.module.css";
import plus from "../../assets/img/add.svg";
import { FC, useState } from "react";
import { AddTask } from "../../types";

export const AddButton: FC<AddTask> = ({ task, setTask }) => {
  const [newTask, setNewTask] = useState<string>("");

  const hidden = document.querySelectorAll<HTMLElement>(`.${style.hidden}`);
  const shown = document.querySelectorAll<HTMLElement>(`.${style.shown}`);

  const handleAdd = () => {
    hidden.forEach((item) => {
      item.classList.toggle(style.hidden);
    });

    shown.forEach((item) => {
      item.classList.add(style.hidden);
    });
  };

  const handleSubmit = () => {
    // task.push({ id: new Date().getTime(), title: newTask, description: "" });
    // console.log(task);

    hidden.forEach((item) => {
      item.classList.toggle(style.hidden);
    });
    // setNewTask("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        className={`${style.task} ${style.hidden}`}
        placeholder="Enter a title for this task ..."
        value={newTask}
        onChange={handleChange}
      />
      <button
        className={`${style.button} ${style.add_button} ${style.shown}`}
        onClick={handleAdd}
      >
        <img src={plus} alt="Add card" />
        Add card
      </button>
      <button
        className={`${style.button} ${style.submit_button} ${style.hidden}`}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  );
};
