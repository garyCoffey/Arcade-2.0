class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    let url = 'https://cors-anywhere.herokuapp.com/http://www.cheatsit.com/gamefeed'

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ games: data.splice(0, 20) }));
  }

  render() {
    return (
      <div>
        <AllGames games={this.state.games} />
      </div>
    )
  }
}