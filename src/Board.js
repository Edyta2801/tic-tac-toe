import React from 'react'




class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }
    render() {
        const status = 'Next player:X';
        return (
            <div>
                <div>
                    {status}
                </div>
                <Board-row>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </Board-row>
                <Board-row>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </Board-row>
                <Board-row>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </Board-row>
            </div>
        )
    }
}

export default Board