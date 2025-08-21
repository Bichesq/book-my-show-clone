
import './App.css'
import { Routes, Route} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/HomePage';
import Movie from './pages/Movie';
import Plays from './pages/Plays';
import MovieLayout from './layout/MovieLayout';

const LayoutWithMovie = MovieLayout(Movie)

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie' element={<LayoutWithMovie />} />
        <Route path='/plays' element={<Plays />} />
      </Routes>
    </>
  )
}

export default App
