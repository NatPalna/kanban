import style from "./style.module.css";
import avatar from "../../assets/img/user.svg";
import arrow from "../../assets/img/arrow.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <h1 className={style.title}>Awesome Kanban Board</h1>
        <div className={style.user_info}>
          <img src={avatar} alt="user" className={style.avatar} />
          <button className={style.button}>
            <img src={arrow} alt="Push me" />
          </button>
        </div>
      </div>
    </header>
  );
};
