import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import SharedLayout from './pages/SharedLayout/SharedLayout'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index  element={<HomePage />}/>
          <Route path=":id" element={<DetailsPage />}/>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
