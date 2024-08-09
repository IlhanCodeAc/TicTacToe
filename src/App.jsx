import styles from './App.module.scss';
import { useState, useEffect } from 'react';

const App = () => {
  const [values, setValues] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleSquareClick = (index) => {
    if (values[index] !== null || winner) return;

    const newValues = [...values];
    newValues[index] = player;
    setValues(newValues);
    setPlayer(player === "X" ? "O" : "X");
  };

  const winConds = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
  ];

  const checkWin = () => {
    for (let [x, y, z] of winConds) {
      if (values[x] && values[x] === values[y] && values[x] === values[z]) {
        setWinner(values[x]);
        return;
      }
    }
    if (!values.includes(null)) {
      setWinner('Draw');
    }

  };

  useEffect(() => {
    checkWin();
  }, [values]);

  return (
    <>
      <div className={styles.container} style={{ margin: '50px auto' }}>
        {values.map((value, index) => (
          <div
            key={index}
            style={{ marginLeft: '13px' }}
            onClick={() => handleSquareClick(index)}
            className={styles.square}
          >
            {value}
          </div>
        ))}
        <button onClick={() => setValues(Array(9).fill(null)) || setWinner(null)}>RESET</button>

      </div>
      {winner && (
        <div className={styles.winner}>
          {winner === 'Draw' ? "It's a Draw!" : `Winner: ${winner}`}
        </div>
      )}
    </>
  );
};

export default App;
