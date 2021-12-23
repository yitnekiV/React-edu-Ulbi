import React, { useEffect, useState } from "react";

import './styles/App.css';

import Counter from "./components/Counter";
import PostList from "./components/PostList";
import PostForm from './components/PostForm';
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePost";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";



function App() {
  const  [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setisPostsLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  async function fetchPosts() {
    setisPostsLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setisPostsLoading(false);
    }, 1000);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App" style={{padding: "10px"}}>
      <MyButton onClick={fetchPosts}>Get posts</MyButton>

      <MyButton onClick={() => setModal(true)}>
        Создать пост
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      <hr style={{margin: '15px'}}/>
      
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      {isPostsLoading
        ? <Loader />
        : <PostList 
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Список постов:"}
        /> 
      }
    </div>
  );
}

export default App;
