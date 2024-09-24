import Header from "../../components/Home/Header/Header";
import SessionForm from "../../components/Home/SessionForm/SessionForm";
import css from './Register.module.css'

const Register = () => {
  return (
    <>
      <Header />
      <main className={css.main}>
        <SessionForm title='Registrarse'>
          <form action="">
            <div purpose="field">
              <label htmlFor="">Nombre de usuario</label>
              <input type="text" name="username" placeholder="Username"/>
            </div>
            <div purpose="field">
              <label htmlFor="">Nombre real</label>
              <input type="text" name="name" placeholder="Nombre"/>
            </div>
            <div purpose="field">
              <label htmlFor="">Apellido</label>
              <input type="text" name="surname" placeholder="Apellido"/>
            </div>
            <div purpose="field">
              <label htmlFor="">Peso (Kilogramos)</label>
              <input type="number" name="surname" placeholder="Ejemplo (73.4)"/>
            </div>
            <div purpose="field">
              <label htmlFor="">Altura (Metros)</label>
              <input type="number" name="surname" placeholder="Ejemplo (1.72)"/>
            </div>
            <div purpose="field">
              <label htmlFor="">Edad (años)</label>
              <input type="number" name="surname" placeholder="Edad"/>
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
export default Register;
