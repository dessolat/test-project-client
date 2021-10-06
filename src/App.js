import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001');
      setGames(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {games.map(game => (
        <p>
          {game.id}
        </p>
      ))}
    </div>
  );
}

export default App;
