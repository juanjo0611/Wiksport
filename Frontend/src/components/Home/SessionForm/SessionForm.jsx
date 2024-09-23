import css from './SessionForm.module.css'

const SessionForm = ({ title, children }) => {
  return (
    <>
      <div className={css.form_card_container}>
        <h1 className={css.form_card_title}>{title}</h1>
        <div className={css.form_wrapper}>
          {children}
        </div>
      </div>
    </>
  )
}
export default SessionForm
