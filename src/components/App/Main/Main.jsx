import css from './Main.module.css'

const Main = ({children, title}) => {
  return (
    <main className={css.app_main}>
      <h1 className={css.app_main_title}>{title}</h1>
      {children}
    </main>
  )
}
export default Main
