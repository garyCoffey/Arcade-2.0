const AllPosts = (props) => {
  let posts = props.posts.map((post) => {
    let showLink = `http://localhost:3000/api/v1/posts/${post.id}`
    return (
      <div key={post.id}>
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