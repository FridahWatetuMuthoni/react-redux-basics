import { useDispatch ,useSelector} from 'react-redux';
import { postEdit } from './postSlice';
import { useState } from 'react'
import { selectAllUsers } from '../users/userSlice';
import { useNavigate } from 'react-router-dom';
import { selectAllPosts } from './postSlice';
import { useParams } from 'react-router-dom'



const EditPost= () => {
    const users = useSelector(selectAllUsers)
  const { id } = useParams()
  const dispatch = useDispatch()
  const nagivate =useNavigate()
  const current_post = useSelector(selectAllPosts).find(post => post.id === id)

    const [post, setPost] = useState({
        title: current_post.title,
        content: current_post.content,
        userId:current_post.userId
    })

    function handleChange(e) {
        setPost((prev) => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    const canSave = Boolean(post.title) && Boolean(post.content) 

    function handleSubmit(e) {
        e.preventDefault()
        if (canSave) {
            const new_obj = {
                id:current_post.id,
                post:post,
            }
            dispatch(postEdit(new_obj))
            nagivate('/',{replace:true})
        }
        else {
            console.log('Enter all the values')
        }
        
    }
    return (
        <section className='container'>
            <h2 className='text-center my-3'>Add a New Post</h2>
            <form action="" onSubmit={handleSubmit} className='form'>
                <div className='mb-3'>
                <label className='form-label' htmlFor="title">Post Title: </label>
                <input className='form-control' type="text" name="title" id="title" value={post.title} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                <label className='form-label' htmlFor="author">Author:</label>
                <select className='form-select' name='userId' value={post.userId} onChange={handleChange} id='author'>
                    <option value="">Enter an Author</option>
                    {
                        users.map((user) => {
                            return (
                                <option key={user.id} value={user.id} >{ user.username}</option>
                            )
                        })
                    }
                </select>
                </div>
                <div className='mb-3'>
                <label className='form-label' htmlFor="content">Content: </label>
                <textarea  className='form-control' name="content" id="content" value={post.content} onChange={handleChange}  rows="3" />
                </div>
                <button className='btn btn-primary' type='submit' disabled={!canSave}>Submit</button>
            </form>
      </section>
  )
}

export default EditPost
