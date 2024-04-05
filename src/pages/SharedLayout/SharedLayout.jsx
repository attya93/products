import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './SharedLayout.css'

function SharedLayout() {
  return (
    <article className='container_fluid m-0 p-0'>
    <Navbar/>
     <Outlet/>
    </article>
  )
}

export default SharedLayout