const AllPosts = (props) => {
  let posts = props.posts.map((post) => {
    let showLink = `https://arcade-room-blog.herokuapp.com/api/v1/posts/${post.id}`
    return (
      <div key={post.id}>
        <Post post={post} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} showLink={showLink} />
      </div >
    )
  })

  return (
    <div>
      {posts}
    </div>
  )
}