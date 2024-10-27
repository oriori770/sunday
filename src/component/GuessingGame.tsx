import React, { useState } from 'react'
import random from '../services/GuessingGame.service'

const GuessingGame = () => {
    const [GuessingNumber, setGuessingNumber] = useState(0);
    const [RandomRange, setRandomRange] = useState(10); 
    const [UserGuess, setUserGuess] = useState(0);
    const [UserStatus, setUserStatus] = useState("try your luck");
    function DefineGuessingNumber () {
        setGuessingNumber(random(0, RandomRange));
        console.log(GuessingNumber);  
    }

    function DefineRandomRange (number: number) {
        setRandomRange(number);
    }

    function hendleGuess () {
        if (UserGuess > GuessingNumber) {
            setUserStatus("Too High");
        } else if (UserGuess < GuessingNumber) {
            setUserStatus("Too Low");
        }
        if (UserGuess === GuessingNumber) {
            setUserStatus("You Win");
        }
    }

  return (
    <>
    <div>GuessingGame</div>
    <button onClick={() => DefineGuessingNumber()}>The system will guess a number between 0 and the number you entered</button>
    <br />
    <input
     onChange={(e)=>DefineRandomRange(Number(e.target.value))}
     type="number" value={RandomRange}
      />
    <br />
    <input
     type="number"
     onChange={(e)=>setUserGuess(Number(e.target.value))}
      />
    <br />
    <button onClick={() => hendleGuess()}>guess</button>
    <h1>{UserStatus}</h1>
    </>
  )
}

export default GuessingGame