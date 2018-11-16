const AllGames = (props) => {
  // console.log(props)
  let games = props.games.map((game) => {
    console.log(game.gameUrl)
    playLink = `${game.gameUrl}`
    return (
      <div key={game.id}>
        <img src={game.gameThumb} />
        <a target="_blank" href={playLink}><p>{game.name}</p></a>
      </div >
    )
  })
  return (
    <div>
      {games}
    </div>
  )
}