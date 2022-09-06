import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from '../components/UI/button/MyButton'
import { AuthContext } from '../context'

export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

  return (
    <header className="header">
        <nav className="nav">
          <MyButton onClick={logOut}>Log Out</MyButton>
          <ul className="nav-list">
            <li className="nav-link">
              <Link to='/about'>ABOUT</Link>
            </li>
            <li className="nav-link">
              <Link to='/posts'>POSTS</Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}
