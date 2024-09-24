import { useContext } from 'react'
import css from './Header.module.css'
import { WhoContext } from '../../../Routes'
import { ROLES } from '../../../data/data'
import VarRender from '../VarRender'

const Link = ({ children, to }) => {
  return (
    <a className={css.home_header_nav_link} href={to}>{children}</a>
  )
}

const Header = () => {
  const { who } = useContext(WhoContext)

  const logout = () => {
    window.localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <header className={css.home_header}>
      <img className={css.home_header_logo} src="./../../logo.png" alt="Application logo" />
      <nav className={css.home_header_nav}>
        <ul className={css.home_header_nav_ul}>
          <li className={css.home_header_nav_li}>
            <Link to='/'>Home</Link>
          </li>
          <VarRender render={who.role === ROLES.GENERAL}>
            <li className={css.home_header_nav_li}>
              <Link to='/iniciar-sesion'>Iniciar sesión</Link>
            </li>
          </VarRender>
          <VarRender render={who.role === ROLES.GENERAL}>
            <li className={css.home_header_nav_li}>
              <Link to='/registrarse'>Registrarse</Link>
            </li>
          </VarRender>
          <VarRender render={who.role === ROLES.USER}>
            <li className={css.home_header_nav_li}>
              <Link to='/panel'>Panel</Link>
            </li>
          </VarRender>
          <VarRender render={who.role === ROLES.USER}>
            <li className={css.home_header_nav_li + " " + css.home_header_nav_li_logout} onClick={logout}>
              Cerrar sesión
            </li>
          </VarRender>
          <VarRender render={who.role === ROLES.USER}>
            <li className={css.home_header_nav_li}>
              {who?.username}
            </li>
          </VarRender>
          <VarRender render={who.role === ROLES.USER}>
            <li className={css.home_header_nav_li + " " + css.home_header_nav_li_img}>
              <img src={who?.img} alt="profile image" />
            </li>
          </VarRender>
        </ul>
      </nav>
    </header>
  )
}
export default Header
