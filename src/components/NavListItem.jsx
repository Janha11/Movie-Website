import React from 'react'
import'./navlistitem.css'
import { Link } from 'react-router-dom'

function NavListItem({nav}) {
  return (
  <li>
    <Link to={nav.link}>{nav.name}</Link>
  </li>
  )
}

export default NavListItem