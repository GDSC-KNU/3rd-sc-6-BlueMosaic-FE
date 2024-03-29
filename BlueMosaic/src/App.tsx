import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from "./pages/LandingPage"
import { Home } from './pages/Home'
import { Mypage } from './pages/Mypage'
import { Collection } from './pages/Collection'
import { Ocean } from './pages/Ocean'
import { Ranking } from './pages/Ranking'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Trash } from './pages/Trash'
import { CollectionFriend } from './pages/CollectionFriend'

import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import RedirectPage from './pages/RedirectPage'
import { OceanPage } from './pages/OceanPage'

function App() {

  return (
    <>
    <ThemeProvider theme={{}}>
    <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/ocean' element={<Ocean/>}/>
          <Route path='/trash' element={<Trash/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/collectionfriend' element={<CollectionFriend/>}/>
          <Route path='/mypage' element={<Mypage/>}/>
          <Route path='/rank' element={<Ranking/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signupRedirect' element={<RedirectPage/>}/>
          <Route path='/oceanfriend' element={<OceanPage/>}/>

        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
