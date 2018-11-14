const AllPosts = (props) => {
  let posts = props.posts.map((post) => {
    return (
      <div key={post.id}>
        <h1>{post.address}</h1>
        <p>{post.body}</p>
      </div>
    )
  })
  return (
    <div>
      {posts}
    </div>
  )
}