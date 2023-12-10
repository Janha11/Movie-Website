import React from 'react'
import navListData from '../Data/navListData'
import NavListItem from '../components/NavListItem'
import'./header.css'
import Search from '../components/Search'
import { Link } from 'react-router-dom'
function Header() {
  return (
   <header>
    <Link to='/' className='logo'>
        Cinema
    </Link>
    <ul className='nav'>
        
            {
            navListData.map(nav=>(
                <NavListItem key={nav._id} nav={nav}/>
            ))
            }


    </ul>
    <Search/>
   </header>
  )
}

export default Header