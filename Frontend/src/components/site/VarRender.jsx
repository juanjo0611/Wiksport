const VarRender = ({ children, render }) => {
  return render ? children : null
}
export default VarRender