import css from "./ContentBox.module.css"

const ContentBox = ({children}) => {
  return (
    <div className={css.app_content_box}>{children}</div>
  )
}
export default ContentBox
