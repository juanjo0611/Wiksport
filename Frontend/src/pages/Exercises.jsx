import ContentBox from "../components/App/ContentBox/ContentBox"
import Footer from "../components/App/Footer/Footer"
import Header from "../components/site/Header/Header"
import Main from "../components/App/Main/Main"
import Sidebar from "../components/App/Sidebar/Sidebar"
import { useContext, useEffect } from "react"
import { WhoContext } from "../Routes"
import { useNavigate } from "react-router-dom"
import { ROLES } from "../data/data"

const Exercises = () => {
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
          This is a main
        </Main>
      </ContentBox>
      <Footer></Footer>
    </>
  )
}
export default Exercises
