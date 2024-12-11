
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/AppLayout'
import MoviesPage from './pages/MoviesPage'
import SingleMoviePage from './pages/SingleMoviePage'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<MoviesPage />} />
            <Route path='/books/:id' element={<SingleMoviePage />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
