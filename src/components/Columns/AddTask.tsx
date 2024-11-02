import style from "./style.module.css";
import plus from "../../assets/img/add.svg";
import { useState } from "react";

export const AddTask = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      {show && (
        <input
          type="text"
          className={style.task}
          placeholder="Enter a title for this task ..."
          // value={newTask}
          // onChange={handleChange}
        />
      )}
      <button
        className={`${style.button} ${
          show ? style.submit_button : style.add_button
        }`}
        onClick={handleClick}
      >
        {!show && <img src={plus} alt="Add card" />}
        {show ? "Submit" : "Add card"}
      </button>
    </>
  );
};
