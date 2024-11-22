
// import { Outlet } from 'react-router-dom'
import './App.css'
import Aboutme from './components/aboutMe/Aboutme'
import MyMap from './components/map/MyMap'
import Sidebar from './components/sidebar/Sidebar'


function App() {

  return (
    <div>
      {/* <Outlet></Outlet> */}
      <Sidebar></Sidebar>
      <Aboutme></Aboutme>
      <MyMap></MyMap>
      <h1>zajbe</h1>
    </div>
  )
}

export default App
