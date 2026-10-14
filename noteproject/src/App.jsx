import { useState } from "react";
import Form from "./components/Form";

const App =() => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [post, setPost] = useState([])
  const FormHandler = (e) => {
    e.preventDefault()
    const newPost = [...post]
    newPost.push({title, details})
    setPost(newPost)
    setTitle('')
    setDetails('')
  }
  const deletePost = (idx)=> {
    const newPost = [...post]
    newPost.splice(idx, 1)
    setPost(newPost)
  }

  return (
    <>
      <Form Delete={deletePost} formhandle={(e)=> {FormHandler(e)}} Post={post} title={title} setTitle={setTitle} details={details} setDetails={setDetails} />
    </>
  )
}
export default App;