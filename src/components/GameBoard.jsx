
export default function GameBoard({ onSelectSquare, board }) {
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



    return (
        <ol id="game-board">
            {board.map(
                (row, rowIndex) =>
                    <li key={rowIndex}><ol>
                        {row.map(
                            (playerSymbol, itemIndex) => <li key={itemIndex}><button onClick={() => onSelectSquare(rowIndex, itemIndex)} disabled={playerSymbol !== null}>
                                {playerSymbol}
                            </button></li>
                        )}
                    </ol></li>
            )}
        </ol>
    );
}