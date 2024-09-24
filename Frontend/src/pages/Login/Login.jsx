import Header from "../../components/Home/Header/Header";
import SessionForm from "../../components/Home/SessionForm/SessionForm";
import { POST } from "../../services/CRUD/POST";
import css from './Login.module.css'



const Login = () => {

  const validForm = ({ username, password }) => {
    if (username === '') return false;
    if (password === '') return false;
    return true;
  }

  const login = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target)
    const username = formData.get('username')
    const password = formData.get('username')

    if (!validForm({ username, password })) return;

    const response = await POST({
      resource: '/auth/login',
      body: {
        username,
        password
      }
    })
  }

  return (
    <>
      <Header />
      <main className={css.main}>
        <SessionForm title='Iniciar sesión'>
          <form action="" onSubmit={login}>
            <div purpose="field">
              <label htmlFor="">Nombre de usuario</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div purpose="field">
              <label htmlFor="">Contraseña</label>
              <input type="password" name="password" placeholder="contraseña" />
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
