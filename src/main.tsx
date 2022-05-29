import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { configuredStore } from './store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={configuredStore}>
    <App />
  </Provider>
)
