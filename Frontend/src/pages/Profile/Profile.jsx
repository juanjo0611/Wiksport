import ContentBox from "../../components/App/ContentBox/ContentBox"
import Footer from "../../components/App/Footer/Footer"
import Header from "../../components/site/Header/Header"
import Main from "../../components/App/Main/Main"
import Sidebar from "../../components/App/Sidebar/Sidebar"
import { useContext, useEffect } from "react"
import { WhoContext } from "../../Routes"
import { useNavigate } from "react-router-dom"
import { ROLES } from "../../data/data"
import css from './Profile.module.css'
import { useUserInfo } from "../../hooks/useUserInfo"

const Profile = () => {
  const { who } = useContext(WhoContext)
  const { userInfo } = useUserInfo()
  const navigate = useNavigate()

  useEffect(() => {
    if (who.role !== undefined && who.role === ROLES.GENERAL) {
      navigate('/')
    }
  }, [who.role])

  return (
    <>
      <Header />
      <ContentBox>
        <Sidebar />
        <Main>
          <h1 className={css.main_title}>Mi perfil</h1>
          <section className={css.main_section}>
            <div className={css.img_container}>
              <img src={userInfo.Imagen} alt="Profile Image" />
            </div>
            <div className={css.data_container}>
              <h2>{userInfo.Username}</h2>
              <span>Nombre: {userInfo.Nombre}</span>
              <span>Apellido: {userInfo.Apellido}</span>
              <span>Peso: {userInfo.Peso} Kilogramos</span>
              <span>Altura: {userInfo.Altura} Metros</span>
              <span>Edad: {userInfo.Edad} Años</span>
            </div>
          </section>
        </Main>
      </ContentBox>
      <Footer></Footer>
    </>
  )
}
export default Profile
