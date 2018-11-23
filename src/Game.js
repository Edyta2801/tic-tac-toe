import React from 'react'

class Game extends React.Component {
    render() {
        return(
        <div>
            <Game>
                <Game-board>
                    <Board />
                </Game-board>
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