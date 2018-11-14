class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    fetch('/api/v1/posts.json')
      .then((response) => { return response.json() })
      .then((data) => { this.setState({ posts: data }) });
  }
  render() {
    return (
      <div>
        <AllPosts posts={this.state.posts} />
      </div>
    )
  }
}