import React, { useState, useRef, useMemo } from "react";

import './styles/App.css';

import Counter from "./components/Counter";
import PostList from "./components/PostList";
import PostForm from './components/PostForm';
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";



function App() {
  const  [posts, setPosts] = useState([
    {
      id:1,
      title: 'Rbs name 1',
      body: 'Daws desc tuto'
    },
    {
      id:2,
      title: 'Axerma legn rofalco',
      body: 'Zorin expl'
    },
    {
      id:3,
      title: 'Broze as lerro',
      body: 'Bolfin eco polp'
    },
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log('Get posts');
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))
  }, [ filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App" style={{padding: "10px"}}>
      <MyButton onClick={(e) => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <Counter/>
      <hr style={{margin: '15px'}}/>
      
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList 
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Список постов:"}
      /> 
    </div>
  );
}

export default App;
