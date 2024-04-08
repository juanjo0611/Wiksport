import css from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={css.app_sidebar}>
      <nav className={css.app_sidebar_nav}>
        <ul className={css.app_sidebar_ul}>
          <li className={css.app_sidebar_li}>
            <a className={css.app_sidebar_link} href="/calendario">
              <i className="fa-regular fa-calendar-days"></i> Calendario
            </a>
          </li>
          <li className={css.app_sidebar_li}>
            <a className={css.app_sidebar_link} href="/ejercicios">
              <i className="fa-solid fa-dumbbell"></i>  Ejercicios
            </a>
          </li>
          <li className={css.app_sidebar_li}>
            <a className={css.app_sidebar_link} href="/rutinas">
              <i className="fa-solid fa-person-running"></i> rutinas
            </a>
          </li>
          <li className={css.app_sidebar_li}>
            <a className={css.app_sidebar_link} href="/perfil">
              <i className="fa-solid fa-user"></i> Perfil
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
export default Sidebar
