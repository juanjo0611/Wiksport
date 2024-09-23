import Header from '../../components/Home/Header/Header'
import css from './Home.module.css'

const Home = () => { 
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
        <a  className={css.home_btn_cta} href="/panel">Abrir Panel</a>
      </main>
    </>
  )
}
export default Home
