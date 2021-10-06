import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Game from './components/Game';

function App() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get('http://localhost:3001/games/count');
      setMaxPages(Math.ceil(response.data / 8));
      response = await axios.get(`http://localhost:3001/${page}`);
      setGames(response.data);
    };
    fetchData();
  }, [page]);

  const handlePrevClick = () => {
    if (page <= 1) return;
    setPage(prev => prev - 1);
  };

  const handleNextClick = () => {
    if (page >= maxPages) return;
    setPage(prev => prev + 1);
  };

  return (
    <div className='container'>
      <nav>
        <button className='nav-btn btn' onClick={handlePrevClick} disabled={page <= 1 && true}>
          {'<'}
        </button>
        <button
          className='nav-btn btn'
          onClick={handleNextClick}
          disabled={page >= maxPages && true}>
          {'>'}
        </button>
      </nav>
      <div className='outer-wrapper'>
        {games.map(game => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default App;
