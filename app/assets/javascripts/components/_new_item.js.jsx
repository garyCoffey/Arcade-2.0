const NewPost = (props) => {
  let formFields = {}

  return (
    <form onSubmit={(e) => { props.handleFormSubmit(formFields.address.value, formFields.blog.value); e.target.reset(); }
    }>
      <input ref={input => formFields.address = input} placeholder='Enter the address of the arcade' />
      <input ref={input => formFields.blog = input} placeholder='Enter your blog' />
      <button>Submit</button>
    </form>
  )
}