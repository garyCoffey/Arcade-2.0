const AllPosts = (props) => {
  let posts = props.posts.map((post) => {
    let showLink = `https://arcade-room-blog.herokuapp.com/api/v1/posts/${post.id}`
    return (
      <div key={post.id}>
        <a href={showLink}><Post post={post} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} /></a>
        {/* <h2>{post.blog}</h2>
        <a href={showLink}><p>{post.address}</p></a> */}
      </div >
    )
  })
  return (
    <div>
      {posts}
    </div>
  )
}