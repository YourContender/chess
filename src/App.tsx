import React, { useEffect, useState } from 'react';
import { BoardComponent } from './components/BoardComponent';
import "./App.css";
import { Board } from './models/Board';

export const App = () => {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  return (
    <div className="app">
        <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  )
}
