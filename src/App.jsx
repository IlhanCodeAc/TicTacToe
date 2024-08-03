import React from 'react'
import styles from './App.module.scss'
import { useState } from 'react'

const handleSquareClick = (index) => {
   if (square[index] !== null) return;
   const newSquare = [...square];
   newSquare[index] = player;
   setSquare(newSquare);
   setPlayer(player === "X" ? "O" : "X");
 };
const App = () => {
  const values =[0,0,0,0,0,0,0,0,0]
  const winCond = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ]
  const [player, setPlayer] = useState("X");
  return (
    <>
    <div className={styles.container} style={{margin :'0 auto'}}>
    {values.map((value) => (
        <div key={value}  className={styles.square}></div>
      ))} 
    </div>
    </>      
  )
}

export default App
