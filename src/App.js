import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Game from './components/Game';

function App() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001');
      setGames(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className='container'>
      <div className='outer-wrapper'>
        {games.slice((page - 1) * 8, page * 8).map(game => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default App;
