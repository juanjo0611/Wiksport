import Header from "../components/App/Header/Header"
import Sidebar from "../components/App/Sidebar/Sidebar"
import Main from "../components/App/Main/Main"
import Footer from "../components/App/Footer/Footer"
import ContentBox from "../components/App/ContentBox/ContentBox"


const Panel = () => {
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
export default Panel
