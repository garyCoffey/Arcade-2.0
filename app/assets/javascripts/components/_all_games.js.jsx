const AllGames = (props) => {
  // console.log(props)
  let games = props.games.map((game) => {
    playLink = `{game.Url}`
    return (
      <div key={game.id}>
        <img src={game.gameThumb} />
        <a href={playLink}><p>{game.name}</p></a>
      </div >
    )
  })
  return (
    <div>
      {games}
    </div>
  )
}