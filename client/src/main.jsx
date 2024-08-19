
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './state/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
  </Provider>

)
