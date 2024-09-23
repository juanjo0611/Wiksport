import ContentBox from "../components/App/ContentBox/ContentBox"
import Footer from "../components/App/Footer/Footer"
import Header from "../components/App/Header/Header"
import Main from "../components/App/Main/Main"
import Sidebar from "../components/App/Sidebar/Sidebar"

const Profile = () => {
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
export default Profile
