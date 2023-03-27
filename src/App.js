import React, { useState,useEffect } from 'react'
import { BrowserRouter, Route,  Routes  } from 'react-router-dom';
import Home from './componant/Home';
import NavAfterLog from './componant/NavAfterLog';
import NavBeforeLogin from './componant/NavBeforeLogin';
import Authentication from './Pages/Authentication';
import Category from './Pages/Category';
import Profilepage from './Pages/Profilepage';
import Team from './Pages/Team';
const App = () => {
  // localStorage.removeItem("info")
  const [user ,setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("Info")));
  }, []);
  // console.log(user);
  return (
      
      <BrowserRouter >
      {
        user ? <NavAfterLog user={user} /> : <NavBeforeLogin />
      }
        {/* <Navigation />
    
      <NavBeforeLogin /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Authentication />} />
        <Route path='/profile' element={<Profilepage />} />
        <Route path='/ourteam' element={<Team />} />
        <Route path='/categories' element={<Category />} />

      </Routes>
    </BrowserRouter>
    
  )
}

export default App

