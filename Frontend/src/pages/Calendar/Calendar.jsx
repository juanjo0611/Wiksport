import Header from "../../components/site/Header/Header"
import Sidebar from "../../components/App/Sidebar/Sidebar"
import Footer from "../../components/App/Footer/Footer"
import ContentBox from "../../components/App/ContentBox/ContentBox"
import Main from "../../components/App/Main/Main"
import getData from "./dataGenerator"
import Queue from "../../services/Data Structures/Queue"
import css from "./Calendar.module.css"
import { useContext, useEffect } from "react"
import { WhoContext } from "../../Routes"
import { useNavigate } from "react-router-dom"
import { ROLES } from "../../data/data"

const DayCell = ({number, routine}) => {
  //return (

  //)
}

const Calendar = () => {
  const { who } = useContext(WhoContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (who.role !== undefined && who.role === ROLES.GENERAL) {
      navigate('/')
    }
  }, [who.role])

  const list = getData(10);

  const q = new Queue();
  if (list) {
    for (let routine of list) q.enqueue(routine);
  }

  let days = Array.from({length: 31}, () => []);
  for (let i = 0; i < 31; i++) {
    while (!q.Empty() && q.First().dayNumber == i + 1) {
      days[i].push(q.First());
      q.dequeue();
    }
  }

  return (
    <>
      <Header />
      <ContentBox>
        <Sidebar />
        <Main title="Calendario">

        <div className={css.calendar_container}>
          {days.map((e, i) => (
            <div className={css.dayCell} key={i}>
              <span>Día {i + 1}</span>

              <div>
                Rutinas:
                {e.map((r, j) => (
                  <span className={css.itemRoutine} key={j*100 + i}>{r.description}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

        </Main>
      </ContentBox>
      <Footer></Footer>
    </>
  )
}

export default Calendar
