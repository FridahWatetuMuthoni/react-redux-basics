import { useDispatch ,useSelector} from 'react-redux';
import { postAdded } from './postSlice';
import { useState } from 'react'
import { selectAllUsers } from '../users/userSlice';


const AddPostForm = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)

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
        }
        else {
            console.log('Enter all the values')
        }
        
    }
    return (
        <section>
            <h2>Add a New Post</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="title">Post Title: </label>
                <input type="text" name="title" id="title" value={post.title} onChange={handleChange} />
                <label htmlFor="author">Author:</label>
                <select name='userId' value={post.userId} onChange={handleChange} id='author'>
                    <option value="">Enter an Author</option>
                    {
                        users.map((user) => {
                            return (
                                <option key={user.id} value={user.id} >{ user.username}</option>
                            )
                        })
                    }
                </select>
                <label htmlFor="content">Content: </label>
                <textarea name="content" id="content" value={post.content} onChange={handleChange} cols="30" rows="10" />
                <button type='submit' disabled={!canSave}>Submit</button>
            </form>
      </section>
  )
}

export default AddPostForm
