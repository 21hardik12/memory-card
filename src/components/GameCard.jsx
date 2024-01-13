function GameCard({url, name}) {
    return (
        <div className="game-card">
            <img src={url} alt="" />
            <div>{name}</div>
        </div>
    )
}

export default GameCard;