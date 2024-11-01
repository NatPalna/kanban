import { Dispatch } from "react";

// карточка доски
export type Cards = {
  title: string;
};

// задача
export type Task = {
  id: number;
  title: string;
  description: string;
};

// добавление задачи
export type AddTask = {
  task: Task[];
  setTask: Dispatch<React.SetStateAction<Task[]>>;
};
