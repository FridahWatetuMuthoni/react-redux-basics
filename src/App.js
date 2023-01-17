import AddPostForm from "./features/post/AddPostForm";
import PostList from "./features/post/PostList";
import Navbar from "./app/Navbar";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<PostList/>}/>
        <Route path="create" element={<AddPostForm/>}/>
        {/* Catches All Routes that does not match the above routes*/}
        <Route  path="*" element={<PostList/>} />
      </Routes>
    </div>
  );
}

export default App;
