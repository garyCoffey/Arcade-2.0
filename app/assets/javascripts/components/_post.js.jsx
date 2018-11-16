class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit() {
    if (this.state.editable) {
      let blog = this.blog.value
      let address = this.address.value
      let id = this.props.post.id
      let post = { id: id, blog: blog, address: address }
      this.props.handleUpdate(post)
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render() {
    let blog = this.state.editable ? <input type='text' ref={input => this.blog = input} defaultValue={this.props.post.blog} className="form-control" /> : <h3>{this.props.post.blog}</h3>
    let address = this.state.editable ? <input type='text' href={this.props.showLink} ref={input => this.address = input} defaultValue={this.props.post.address} className="form-control" /> : <p>href={this.props.showLink} {this.props.post.address}</p>
    return (
      <div>
        {blog}
        {address}
        <button className="btn btn-primary" onClick={() => this.handleEdit()}>{this.state.editable ? 'Submit' : 'Edit'}</button>
        <button className="btn btn-primary" onClick={() => this.props.handleDelete(this.props.post.id)}>Delete</button>
      </div>
    )
  }
}