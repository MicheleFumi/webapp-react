import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/AppLayout'
import MoviesPage from './pages/MoviesPage'
import SingleMoviePage from './pages/SingleMoviePage'

import MovieProvider from './context/MovieContext'

function App() {


  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<MoviesPage />} />
              <Route path='/movies/:id' element={<SingleMoviePage />} />
            </Route>
          </Routes>

        </BrowserRouter>
      </MovieProvider>
    </>
  )
}

export default App
