import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/scores')
      .then(response => {
        setScores(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Scores</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(scores).map(([name, score]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Leaderboard;
