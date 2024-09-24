import ContentBox from "../components/App/ContentBox/ContentBox"
import Footer from "../components/App/Footer/Footer"
import Main from "../components/App/Main/Main"
import Sidebar from "../components/App/Sidebar/Sidebar"
import Header from "../components/site/Header/Header"

const CreateRoutine = () => {
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
export default CreateRoutine
