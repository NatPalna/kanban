import style from "./style.module.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className={style.tasks_count}>
        <p className={style.tasks_active}>
          Active tasks: <span className={style.tasks_active_count}>0</span>
        </p>
        <p className={style.tasks_completed}>
          Finished tasks: <span className={style.tasks_completed_count}>0</span>
        </p>
        <p></p>
      </div>
      <div className={style.author_info}>
        Kanban board by <span className={style.author_name}>NAME</span>,{" "}
        <span className={style.year}>YEAR</span>
      </div>
    </footer>
  );
};
