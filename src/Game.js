import React from 'react'
import Board from './Board'

class Game extends React.Component {
    render() {
        return(
        <div>
            <Game>
                <div>
                    <Board />
                </div>
                <Game-info>
                    <div>{}</div>
                    <ol>{}</ol>
                </Game-info>
            </Game>
        </div>
        )
    }
}
export default Game