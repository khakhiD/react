import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  /*
    React.StrictMode
    작성한 코드가 최적인지 아닌지 확인하여 알려주는 기능,
    추후 리액트가 업데이트되었을 때 작성 코드가 호환되지 않는 상황에 경고를 주는 기능
  */ 

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
