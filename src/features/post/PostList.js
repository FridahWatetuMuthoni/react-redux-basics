import { useSelector } from 'react-redux';
import { selectAllPosts } from './postSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons'


const PostList = () => {
    const posts = useSelector(selectAllPosts)
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  return (
      <div>
          <h2>Posts</h2>
          {
              orderedPosts.map((post) => {
                  return (
                      <article key={post.id}>
                          <h3>{post.title}</h3>
                          <PostAuthor userId={post.user} />
                           <TimeAgo timestamp={post.date}/> 
                          <p>{ post.content.substring(0,100)}...</p>
                          <ReactionButtons post={post}/>
                      </article>
                  )
              })
          }
    </div>
  )
}

export default PostList