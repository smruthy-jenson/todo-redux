import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './bootstrap.min.css'
import { Provider } from 'react-redux'
import './index.css'
import cartStore from './REDUX/cartStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={cartStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)