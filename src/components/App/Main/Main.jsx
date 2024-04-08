import css from './Main.module.css'

const Main = ({children}) => {
  return <main className={css.app_main}>{children}</main>
}
export default Main
