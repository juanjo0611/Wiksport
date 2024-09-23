import css from './Header.module.css'

const Link = ({children, to}) => {
  return (
    <a className={css.home_header_nav_link} href={to}>{children}</a>
  )
}

const Header = () => {
  return (
    <header className={css.home_header}>
      <img className={css.home_header_logo} src="./../../logo.png" alt="Application logo" />
      <nav className={css.home_header_nav}>
        <ul className={css.home_header_nav_ul}>
          {/* <li className={css.home_header_nav_li}>
            <Link to='/login'>Login</Link>
          </li>
          <li className={css.home_header_nav_li}>
            <Link to='/register'>Sign up</Link>
          </li> */}
          <li className={css.home_header_nav_li}>
            <Link to='/iniciar-sesion'>Iniciar sesión</Link>
          </li>
          <li className={css.home_header_nav_li}>
            <Link to='/registrarse'>Registrarse</Link>
          </li>
          <li className={css.home_header_nav_li}>
            <Link to='/panel'>Registrarse</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
