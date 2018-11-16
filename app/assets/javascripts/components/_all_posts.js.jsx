const AllPosts = (props) => {
  let posts = props.posts.map((post) => {
    let showLink = `${URL}${post.id}`
    return (
      <div key={post.id}>
        <Post post={post} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} />
        <h2>{post.blog}</h2>
        <a href={showLink}><p>{post.address}</p></a>
      </div >
    )
  })
  return (
    <div>
      {posts}
    </div>
  )
}