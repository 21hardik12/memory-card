function ScoreBoard({score, bestScore}) {
    return (
        <div className="score-board">
            <div>Score: {score}</div>
            <div>Best Score: {bestScore}</div>
        </div>
    )
}

export default ScoreBoard;