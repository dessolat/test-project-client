import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Game from './components/Game';
import Navi from './components/Navi';

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

  return (
    <div className='container'>
      <Navi page={page} setPage={setPage} maxPages={maxPages} />
      <div className='outer-wrapper'>
        {games.map(game => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default App;
