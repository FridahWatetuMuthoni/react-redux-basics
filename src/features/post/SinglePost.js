import { useSelector } from 'react-redux'
import { selectAllPosts } from './postSlice'
import { useParams } from 'react-router-dom'
import TimeAgo from './TimeAgo'

const SinglePost = () => {
    const { id } = useParams()
    console.log(id)
    const post = useSelector(selectAllPosts).find(post => post.id === id)
    return (
<div className="card text-center mt-5 card-h">
    <div className="card-header mb-5">
                Single Post
  </div>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.content}</p>
    <div className='mt-3'>
    <a href="/" className="card-link">Card link</a>
    <a href="/" className="card-link">Another link</a>
    </div>
    
  </div>
    <div className="card-footer text-muted">
            <TimeAgo timestamp={post.date}/>
  </div>
</div>
  )
}

export default SinglePost