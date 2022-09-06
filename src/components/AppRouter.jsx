import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../pages/About'
import Posts from '../pages/Posts'
import { Error } from '../pages/Error'
import { PostIdPage } from '../pages/PostIdPage'
import { routes, publicRoutes } from '../route/route'
import { Login } from '../pages/Login'
import { useContext } from 'react'
import { AuthContext } from '../context'
import { Loader } from './UI/loader/Loader'

export const AppRouter = () => {
  const {isAuth, loading} = useContext(AuthContext);

  if(loading) {
    return <Loader/>
  }
  return (
    
    isAuth 
        ?<Routes> {routes.map(route => 
            <Route key={route.path} element={route.element}
                  path={route.path}
                  exact={route.exact} />
          )}
          <Route path='*' element={<Error/>} />
        </Routes>
        : <Routes> 
            {publicRoutes.map(route => 
              <Route key={route.path} element={route.element}
                    path={route.path}
                    exact={route.exact} />
            )}
            <Route path="*" element={<Login/>}/>
          </Routes>
  )
}
