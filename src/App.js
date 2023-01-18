import AddPostForm from "./features/post/AddPostForm";
import PostList from "./features/post/PostList";
import Navbar from "./app/Navbar";
import { Routes, Route } from 'react-router-dom';
import SinglePost from "./features/post/SinglePost";


function App() {
  return (
    <div >
      <Navbar />
      <div className="container">
        <Routes>
        {/* public routes */}
        <Route path="posts" element={<PostList/>}/>
          <Route path="create" element={<AddPostForm />} />
          <Route path="post/:id" element={<SinglePost/>}/>
        {/* Catches All Routes that does not match the above routes*/}
        <Route  path="*" element={<PostList/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
