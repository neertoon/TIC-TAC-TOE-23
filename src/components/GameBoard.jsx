const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
export default function GameBoard({ onSelectSquare, turns }) {
    // const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex, symbol) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = symbol;
    //         return updatedBoard;
    //     });
    //
    //     onSelectSquare();
    // }

    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        gameBoard[turn.square.row][turn.square.col] = turn.player;
    }

    return (
        <ol id="game-board">
            {gameBoard.map(
                (row, rowIndex) =>
                    <li key={rowIndex}><ol>
                        {row.map(
                            (playerSymbol, itemIndex) => <li key={itemIndex}><button onClick={() => onSelectSquare(rowIndex, itemIndex)}>{playerSymbol}</button></li>
                        )}
                    </ol></li>
            )}
        </ol>
    );
}