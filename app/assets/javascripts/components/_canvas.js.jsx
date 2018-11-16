let url = 'https://cors-anywhere.herokuapp.com/http://www.cheatsit.com/gamefeed'

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ games: data }));
  }

  render() {
    return (
      <div>
        <AllGames games={this.state.games} />
      </div>
    )
  }
}