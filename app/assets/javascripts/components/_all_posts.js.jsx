const AllPosts = (props) => {
  let posts = props.posts.map((post) => {
    let showLink = `http://localhost:3000/api/v1/posts/${post.id}`
    return (
      <div key={post.id}>
        <a href={showLink}><h1>{post.address}</h1></a>
        <p>{post.blog}</p>
      </div >
    )
  })
  return (
    <div>
      {posts}
    </div>
  )
}