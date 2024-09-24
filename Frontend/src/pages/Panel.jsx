import Header from "../components/site/Header/Header"
import Sidebar from "../components/App/Sidebar/Sidebar"
import Main from "../components/App/Main/Main"
import Footer from "../components/App/Footer/Footer"
import ContentBox from "../components/App/ContentBox/ContentBox"
import { useContext, useEffect } from "react"
import { WhoContext } from "../Routes"
import { ROLES } from "../data/data"
import { useNavigate } from "react-router-dom"


const Panel = () => {
  const { who } = useContext(WhoContext)
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
          <h1>Bienvenido al panel de usuario</h1>
          <p>Navega entre los distintos menús a tu izquierda</p>
        </Main>
      </ContentBox>
      <Footer></Footer>
    </>
  )
}
export default Panel
