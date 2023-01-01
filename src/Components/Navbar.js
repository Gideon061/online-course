import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import { useWindowSize } from '../Hooks/useWindowSize'

const Navbar = () => {

  const [side,setSide] = useState(false)

  const showSidebar = () => setSide(!side)

  const {width} = useWindowSize()

  return (
    <div>
        {width>1024 ?<nav className='nav-container nav-flex'>
            <h1>Pokendo</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/pokedex'>Pokemon Lists</Link></li>
                <li><Link to='/berry'>Berry Lists</Link></li>
            </ul>
        </nav>:
        <>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} />
          </Link>
        <nav className={side ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
                <AiOutlineClose />
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/'>Home</Link>
              </li>
                <li className='nav-text'>
                  <Link to='/pokedex'>Pokemon Lists</Link>
                  </li>
                <li className='nav-text'>
                  <Link to='/berry'>Berry Lists</Link>
                  </li>
                <li className='nav-text'>
                  <Link to='/news'>News</Link>
                  </li>
          </ul>
        </nav>
        </div>
        </>
           
          }
    </div>
  )
}

export default Navbar