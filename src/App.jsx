import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import confetti from 'canvas-confetti'


import { Square } from './assets/components/Square'
import { TURNS } from './assets/constans'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './assets/components/WinnerModal'

function App() {
    const [board, setBoard]=  useState( Array(9).fill(null)
        )

    const [turn, setTurn] = useState(TURNS.X)

    const [winner, setWinner] = useState(null)


    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
        // Depende mucho de lo que busques hacer, de la logica del funcionamiento del juego
    }

    const updateBoard = (index) => {
        //no actualizamos esta posicion si ya tiene algo
        if (board[index] || winner) return

        //Actualizar el tablero
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        //Cambiar el turno
        const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
        //revisamos si hay ganador
        const newWinner = checkWinner(newBoard)
        if (newWinner){
            confetti()
            setWinner(newWinner)
            } else if (checkEndGame (newBoard)){
                setWinner(false)//Empate
            
        }
    }

    return (
        <main className='board'>
            <h1>Tic tac toe</h1>
            <button onClick={resetGame}>Reset del juego</button>
            <section className= "game">
                {
                    board.map((square, index) =>{
                        return (
                            <Square //es una lista(es cada una de las posiciones en cada cuadro), por ello, debe tener valor unico "key"
                                key={index}
                                index={index}
                                updateBoard={updateBoard}
                            >
                                {square}
                            </Square>
                        )             
                    })
                }
        </section>

        <section className="turn">
            <Square isSelected={turn == TURNS.X}>
                {TURNS.X}                
            </Square>

            <Square isSelected={turn == TURNS.O}>
                {TURNS.O}
            </Square>
        </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
    )
}
export default App
