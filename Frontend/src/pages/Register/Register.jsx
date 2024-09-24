import { useContext, useEffect, useState } from "react";
import Header from "../../components/site/Header/Header";
import SessionForm from "../../components/Home/SessionForm/SessionForm";
import css from './Register.module.css'
import Swal from "sweetalert2";
import { WhoContext } from "../../Routes";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../data/data";
import { POST } from "../../services/CRUD/POST";

const Register = () => {
  const [submitText, setSubmitText] = useState('Registrarse');
  const { who } = useContext(WhoContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (who.role !== undefined && who.role === ROLES.USER) {
      navigate('/panel')
    }
  }, [who.role])
  

  const validForm = ({ username, name, surname, weight, height, age, img, password }) => {
    const ok = ![username, name, surname, weight, height, age, img, password].includes('')
    if (!ok) {
      Swal.fire({
        icon: "warning",
        title: "Rellena todos los campos",
      });
      return false;
    }
    if (isNaN(weight)) {
      Swal.fire({
        icon: "warning",
        title: "El campo peso debe ser un número",
      });
      return false
    }
    if (isNaN(height)) {
      Swal.fire({
        icon: "warning",
        title: "El campo altura debe ser un número",
      });
    }
    if (isNaN(age)) {
      Swal.fire({
        icon: "warning",
        title: "El campo age debe ser un número",
      });
    }
    return true;
  }

  const register = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    let username = formData.get('username')
    let name = formData.get('name')
    let surname = formData.get('surname')
    let weight = formData.get('weight')
    let height = formData.get('height')
    let age = formData.get('age')
    let img = formData.get('img')
    let password = formData.get('password')
    if (!validForm({ username, name, surname, weight, height, age, img, password })) return

    weight = parseFloat(weight)
    height = parseFloat(height)
    age = parseFloat(age)

    let responseInRegister;
    try {
      await POST({
        resource: '/auth/register',
        body: {
          username,
          name,
          surname,
          weight,
          height,
          age,
          img,
          password
        }
      })
      responseInRegister = 'success'
    }
    catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Ocurrió un error en el registro',
        icon: 'error',
        text: 'es posible que el username ya exista o que se hayan ingresado valores erróneos en los campos',
      })
    }

    if (responseInRegister === 'success') {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 800,
        // timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Registro exitoso"
      });
      try {
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
        }
      }
      catch (error) {
        console.log(error)
      }
    }

  }
  return (
    <>
      <Header />
      <main className={css.main}>
        <SessionForm title='Registrarse'>
          <form action="" onSubmit={register}>
            <div purpose="field">
              <label>Nombre de usuario</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div purpose="field">
              <label>Nombre real</label>
              <input type="text" name="name" placeholder="Nombre" />
            </div>
            <div purpose="field">
              <label>Apellido</label>
              <input type="text" name="surname" placeholder="Apellido" />
            </div>
            <div purpose="field">
              <label>Peso (Kilogramos)</label>
              <input type="number" name="weight" step="0.1" placeholder="Ejemplo (73.4)" />
            </div>
            <div purpose="field">
              <label>Altura (Metros)</label>
              <input type="number" name="height" step="0.01" placeholder="Ejemplo (1.72)" />
            </div>
            <div purpose="field">
              <label>Edad (años)</label>
              <input type="number" name="age" placeholder="Edad" />
            </div>
            <div purpose="field">
              <label>Imágen de perfil (URL)</label>
              <input type="text" name="img" placeholder="url" />
            </div>
            <div purpose="field">
              <label>Contraseña</label>
              <input type="password" name="password" placeholder="contraseña" />
            </div>
            <div purpose="submit">
              <input type="submit" value={submitText} />
            </div>
          </form>
        </SessionForm>
      </main>
    </>
  )
}
export default Register;
