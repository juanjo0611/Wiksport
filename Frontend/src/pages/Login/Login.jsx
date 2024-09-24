import Header from "../../components/Home/Header/Header";
import SessionForm from "../../components/Home/SessionForm/SessionForm";
import css from './Login.module.css'

const Login = () => {
  const login = event => {
    event.preventDefault();
  }
  
  return (
    <>
      <Header />
      <main className={css.main}>
        <SessionForm title='Iniciar sesión'>
          <form action="">
            <div purpose="field">
              <label htmlFor="">Nombre de usuario</label>
              <input type="text" name="username" placeholder="Username"/>
            </div>
            <div purpose="field">
              <label htmlFor="">Contraseña</label>
              <input type="password" name="password" placeholder="contraseña"/>
            </div>
            <div purpose="submit">
              <input type="submit" />
            </div>
          </form>
        </SessionForm>
      </main>
    </>
  )
}
export default Login;
