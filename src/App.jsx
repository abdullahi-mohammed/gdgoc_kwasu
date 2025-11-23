import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import GetDp from './pages/get-dp/GetDp'
import Home from './pages/Home'
import Sponsors from './pages/Sponsors'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='get-dp' element={<GetDp />} />
          {/* <Route path='sponsors' element={<Sponsors />} /> */}
          <Route path='*' element={<Home />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
