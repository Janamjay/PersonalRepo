import React, { useState } from 'react'
import styles from './TicTacToe.module.css'

export default function TicTacToe() {
	const [turn, setTurn] = useState('X');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState();

	const checkForWinner = (squares) => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					squares[pattern[0]] === '' ||
					squares[pattern[1]] === '' ||
					squares[pattern[2]] === ''
				) {
					// do nothing
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					setWinner(squares[pattern[0]]);
				}
			});
		}
	};

	const handleClick = (num) => {
		if (cells[num] !== '') {
			alert('already clicked');
			return;
		}

		let squares = [...cells];

		if (turn === 'X') {
			squares[num] = 'X';
			setTurn('O');
		} else {
			squares[num] = 'O';
			setTurn('X');
		}

		checkForWinner(squares);
		setCells(squares);
	};

	const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
	};

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.heading}>
					<h1>Player : ({turn}) Turn</h1>
				</div>
				<table>
					<tbody>
						<tr>
							<Cell num={0} />
							<Cell num={1} />
							<Cell num={2} />
						</tr>
						<tr>
							<Cell num={3} />
							<Cell num={4} />
							<Cell num={5} />
						</tr>
						<tr>
							<Cell num={6} />
							<Cell num={7} />
							<Cell num={8} />
						</tr>
					</tbody>
				</table>
				{winner && (
					<div className={styles.winner}>
						<p>Player ({winner})  is the winner!</p>
						<button className={styles.playAgain} onClick={() => handleRestart()}>Play Again</button>
					</div>
				)}
				<p className={styles.creator}>Created by ❤️ Janamjay </p>
			</div>
		</div>
	);
};
