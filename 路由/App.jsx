import React from 'react'
import { NavLink, Navigate,useRoutes} from 'react-router-dom'
import About from './Page/About'
import Home from './Page/Home'

export default function App() {

const element = useRoutes([
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/',
    element: <Navigate to='/about' />
  }
])
return (
<div id="root">
  <div>
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><h2>React Router Demo</h2></div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/* 路由链接 */}
          <NavLink className="list-group-item" to="about">About</NavLink>
          <NavLink className="list-group-item" to="home">Home</NavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
              {element}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

