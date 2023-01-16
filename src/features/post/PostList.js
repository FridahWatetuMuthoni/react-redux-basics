import { useSelector } from 'react-redux';
import { selectAllPosts } from './postSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostList = () => {
    const posts = useSelector(selectAllPosts)
    console.log(posts)
  return (
      <div>
          <h2>Posts</h2>
          {
              posts.map((post) => {
                  return (
                      <article key={post.id}>
                          <h3>{post.title}</h3>
                          <PostAuthor userId={post.user} />
                           <TimeAgo timestamp={post.date}/> 
                          <p>{ post.content.substring(0,100)}...</p>
                      </article>
                  )
              })
          }
    </div>
  )
}

export default PostList