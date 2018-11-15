const NewPost = (props) => {
  let formFields = {}

  return (

    <form onSubmit={(e) => { props.handleFormSubmit(formFields.address.value, formFields.blog.value); e.target.reset(); }
    }>
      <div className="form-group">
        <label>Your BloooahhhG</label>
        <textarea ref={input => formFields.blog = input} placeholder='Enter your blog' type="string" className="form-control" />
      </div>

      <div className="form-group">
        <label>Address</label>
        <input ref={input => formFields.address = input} placeholder='Enter the address of the arcade' type="string" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}