import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects/:slug' element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
