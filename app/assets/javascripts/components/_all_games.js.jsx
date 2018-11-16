const AllGames = (props) => {
  // console.log(props)
  let games = props.games.slice(0, 20).map((game) => {
    playLink = `{game.Url}`
    return (
      <div key={game.id}>
        <Game game={game} />
        <img src={game.gameThumb} />
        <a href={game.Url}><p>{game.name}</p></a>
      </div >
    )
  })
  return (
    <div>
      {games}
    </div>
  )
}