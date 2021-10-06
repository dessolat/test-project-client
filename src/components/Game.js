import React from 'react';

const Game = ({ game }) => {
  return (
    <div className='wrapper'>
      <div className='game'>
        <h5 className='game__header'>FINAL</h5>
        <div className='game__matchup'>
          <div className='game__team-logos'>
            <img className='game__team-logo' src={game.team_attack_logo} alt='' />
            <img className='game__team-logo' src={game.team_defence_logo} alt='' />
          </div>
          <div className='game__toggler'>
            <div className='game__team-names'>
              <p className='game__team-name'>
                {game.team_attack} <span>40-50</span>
              </p>
              <p className='game__team-name'>
                {game.team_defence} <span>40-50</span>
              </p>
            </div>
            {/* <table className='game__scores-table'>
              <thead>
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{game.runs}</td>
                  <td>{game.hits}</td>
                  <td>{game.saves}</td>
                </tr>
                <tr>
                  <td>{game.runs}</td>
                  <td>{game.hits}</td>
                  <td>{game.saves}</td>
                </tr>
              </tbody>
            </table> */}
          </div>

          <table className='game__info'>
            <thead>
              <tr>
                <th>R</th>
                <th>H</th>
                <th>E</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{game.runs}</td>
                <td>{game.hits}</td>
                <td>{game.saves}</td>
              </tr>
              <tr>
                <td>{game.runs}</td>
                <td>{game.hits}</td>
                <td>{game.saves}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='game__pitchers'>
          <div className='game__pitcher'>
            <div className='game__pitcher-logo-wrapper'>
              <img className='game__pitcher-logo' src={game.pitcher_attack_logo} alt='' />
            </div>
            <div className='game__pitcher-info'>
              <p className='game__pitcher-name'>{game.pitcher_attack}</p>
              <span className='game__pitcher-other-info'>12 - 6 | 3.09 ERA</span>
            </div>
          </div>
          <div className='game__pitcher'>
            <div className='game__pitcher-logo-wrapper'>
              <img className='game__pitcher-logo' src={game.pitcher_defence_logo} alt='' />
            </div>

            <div className='game__pitcher-info'>
              <p className='game__pitcher-name'>{game.pitcher_defence}</p>
              <span className='game__pitcher-other-info'>12 - 6 | 3.09 ERA</span>
            </div>
          </div>
        </div>
        <div className='game__footer'>
          <a href='/' className='game__link'>
            MLB.TV
          </a>
          <a href='/' className='game__link'>
            Wrap
          </a>
          <a href='/' className='game__link'>
            Box
          </a>
          <a href='/' className='game__link'>
            Highlights
          </a>
        </div>
      </div>
    </div>
  );
};

export default Game;
