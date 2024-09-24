import Swal from "sweetalert2";
import Header from "../../components/site/Header/Header";
import SessionForm from "../../components/Home/SessionForm/SessionForm";
import { POST } from "../../services/CRUD/POST";
import css from './Login.module.css'
import { useContext, useEffect } from "react";
import { WhoContext } from "../../Routes";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../data/data";

const Login = () => {
  const { who } = useContext(WhoContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (who.role !== undefined && who.role === ROLES.USER) {
      navigate('/panel')
    }
  }, [who.role])

  const validForm = ({ username, password }) => {
    const ok = ![username, password].includes('')
    if (!ok) {
      Swal.fire({
        icon: "warning",
        title: "Rellena todos los campos",
      });
    }
    return ok;
  }

  const login = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const username = formData.get('username')
    const password = formData.get('password')

    if (!validForm({ username, password })) return;

    const response = await POST({
      resource: '/auth/login',
      body: {
        username,
        password
      }
    })
    if (response?.token) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 800,
        // timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Iniciando sesión"
      });
      window.localStorage.setItem('token', response.token)
      setTimeout(() => window.location.reload(), 700)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Credenciales incorrectas'
      })
    }

    console.log(response)
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
