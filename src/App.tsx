import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/header/Header'
import { useEffect } from 'react'
import HomePage from './pages/HomePage/HomePage'
import AboutMePage from './pages/AboutMePage/AbountMePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
// import Footer from './components/footer/Footer'

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
          <Route path="/" element={<HomePage />} errorElement={<NotFoundPage />}></Route>
          <Route path="/about-me" element={<AboutMePage />} errorElement={<NotFoundPage />}></Route>
          <Route path="*" element={<NotFoundPage />} errorElement={<NotFoundPage />}></Route>
        </Routes>
      </div>

      {/* <Footer /> */}

    </BrowserRouter>
  </>)
}