import './style.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(square);
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMessage = winner
    ? `Winner is ${winner}`
    : `NextPlayer is ${nextPlayer}`;
  const handleSquareClick = ClickedPosition => {
    if (square[ClickedPosition] || winner) {
      return;
    }

    setSquare(curSquare => {
      return curSquare.map((squareValue, position) => {
        if (ClickedPosition == position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });

    setIsXNext(curIsXNext => !curIsXNext);
  };
  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board square={square} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
