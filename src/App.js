import React, { useEffect, useState } from "react";
import './app.css'
import { AppRouter } from "./components/AppRouter";
import { AuthContext } from "./context";
import { Navbar } from "./Navbar/Navbar";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  },[])
  return(
   <> 
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      loading
    }}>
      <Navbar/>
      <AppRouter/>
    </AuthContext.Provider>
    </>
  )
}

export default App;
