import { useContext } from 'react'
import Header from '../../components/site/Header/Header'
import css from './Home.module.css'
import { WhoContext } from '../../Routes'
import VarRender from '../../components/site/VarRender'
import { ROLES } from '../../data/data'

const Home = () => {
  const { who } = useContext(WhoContext)

  return (
    <>
      <Header />
      <main className={css.home_main}>
        <h1 className={css.home_main_title}>Wiksport</h1>
        <p className={css.home_motivation_p}>
          "La persistencia puede cambiar el fracaso en un logro extraordinario".
        </p>
        <span className={css.home_motivation_author}>
          Matt Biondi
        </span>
        <VarRender render={who?.role === ROLES.GENERAL}>
          <a className={css.home_btn_cta} href="/registrarse">Registrate</a>
        </VarRender>
        <VarRender render={who?.role === ROLES.GENERAL}>
          <a className={css.home_btn_cta} href="/iniciar-sesion">Inicia sesión</a>
        </VarRender>
        <VarRender render={who?.role === ROLES.USER}>
          <a className={css.home_btn_cta} href="/panel">Ir al Panel</a>
        </VarRender>
      </main>
    </>
  )
}
export default Home
