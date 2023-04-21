import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'
import NewPost from './components/NewPost'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/create-post', element: <NewPost />}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  /*
    React.StrictMode
    작성한 코드가 최적인지 아닌지 확인하여 알려주는 기능,
    추후 리액트가 업데이트되었을 때 작성 코드가 호환되지 않는 상황에 경고를 주는 기능
  */ 

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
