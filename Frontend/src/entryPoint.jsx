import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/Normalize.css'
import './Styles/generalStyles.css'
import './Styles/variables.css'
import AppRoutes from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
