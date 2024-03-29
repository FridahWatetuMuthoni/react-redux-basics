import { useDispatch ,useSelector} from 'react-redux';
import { postAdded } from './postSlice';
import { useState } from 'react'
import { selectAllUsers } from '../users/userSlice';
import { useNavigate } from 'react-router-dom';


const AddPostForm = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const nagivate = useNavigate()

    const [post, setPost] = useState({
        title: "",
        content: "",
        userId:""
    })

    function handleChange(e) {
        setPost((prev) => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    const canSave = Boolean(post.title) && Boolean(post.content) && Boolean(post.userId)

    function handleSubmit(e) {
        e.preventDefault()
        if (canSave) {
            dispatch(postAdded(post))
            setPost( {
                title: '',
                content: "",
                userId:''
            })
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

export default AddPostForm
