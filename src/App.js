import './App.css';
import HomePage from './views/HomePage';
import BeersPage from './views/BeersPage';
import RandomBeerPage from './views/RandomBeerPage';
import NewBeerPage from './views/NewBeerPage';
import BeerDetailPage from './views/BeerDetailPage';
import ErrorPage from './views/ErrorPage';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<NavBar />} />
        <Route path='/beers' element={<BeersPage />} />
        <Route path='/beers/:beerId' element={<BeerDetailPage />} />
        <Route path='/random-beer' element={<RandomBeerPage />} />
        <Route path='/new-beer' element={<NewBeerPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
