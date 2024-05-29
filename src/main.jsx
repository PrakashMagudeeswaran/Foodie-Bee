import React from 'react'
import ReactDOM from 'react-dom/client'

import Linking from './Linking'
import {RouterProvider} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Linking}/>
  </React.StrictMode>,
)
