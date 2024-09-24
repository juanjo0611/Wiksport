import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Panel from './pages/Panel'
import Calendar from './pages/Calendar/Calendar'
import Exercises from './pages/Exercises'
import Routines from './pages/Routines'
import CreateRoutine from './pages/CreateRoutine'
import Profile from './pages/Profile/Profile'
import Page404 from './pages/Page404'
import COMP_AVL from './pages/AVL'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { useWho } from './hooks/useWho'
import { createContext } from 'react'

export const WhoContext = createContext()

const AppRoutes = () => {
  const { who } = useWho()
  return (
    <WhoContext.Provider value={{ who }}>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/panel' exact element={<Panel />} />
          <Route path='/iniciar-sesion' exact element={<Login />} />
          <Route path='/registrarse' exact element={<Register />} />
          <Route path='/calendario' exact element={<Calendar />} />
          <Route path='/ejercicios' exact element={<Exercises />} />
          <Route path='/rutinas' exact element={<Routines />} />
          <Route path='crear-rutina' exact elemnt={<CreateRoutine />} />
          <Route path='/perfil' exact element={<Profile />} />
          <Route path='/avl' element={<COMP_AVL />}></Route>
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </Router>
    </WhoContext.Provider>
  )
}
export default AppRoutes
