import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Header from './components/header/Header'
// import Footer from './components/footer/Footer'
import { useEffect } from 'react'

export default function App() {

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [])

  return (<>
    <BrowserRouter>

      <Header />

      <div className='page'>
        <Routes>
          <Route path="/" element={<Home />} errorElement={<NotFound />}></Route>
          {/* TODO: Añadir la ruta de about me */}
          {/* <Route path="/about-me" element={<Home />} errorElement={<NotFound />}></Route> */}
          <Route path="*" element={<NotFound />} errorElement={<NotFound />}></Route>
        </Routes>
      </div>

      {/* <Footer /> */}

    </BrowserRouter>
  </>)
}