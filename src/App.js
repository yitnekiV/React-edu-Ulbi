import React, { useState, useRef } from "react";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

import './styles/App.css';

function App() {
  const  [posts, setPosts] = useState([
    {
      id:1,
      title: 'Name Caption 1',
      body: 'Description'
    },
    {
      id:2,
      title: 'Name Caption 2',
      body: 'Description'
    },
    {
      id:3,
      title: 'Name Caption 3',
      body: 'Description'
    },
  ]);

  // const [title, setTitle] = useState(''); 
  // const [body, setBody] = useState(''); 
  // const bodyInputRef = useRef();

  const [post, setPost] = useState({
    title: '', 
    body: ''
  })


  const addNewPost = e => {
    e.preventDefault();
    // console.log(title);
    // console.log(body);
    // console.log(bodyInputRef.current.value);
    // const newPost = {
    //   id: Date.now(),
    //   title: post.title,
    //   body: post.body
    // }
    // console.log(newPost);

    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({
      title: '', 
      body: ''
    })
    // setBody('');
    // setTitle('');
  }

  return (
    <div className="App">
      <Counter/>
      <form>
        <MyInput 
          onChange={e => setPost({...post, title: e.target.value})} 
          value={post.title}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          onChange={e => setPost({...post, body: e.target.value})}
          value={post.body}
          type="text"
          placeholder="Описание поста" 
        />
        {/* <input ref={bodyInputRef} type="text" /> */}
        {/* <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста"/> */}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={"Список постов:"}/> 
    </div>
  );
}

export default App;
