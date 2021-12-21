import React, { useState, useRef } from "react";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import PostForm from './components/PostForm';
import MySelect from "./components/UI/select/MySelect";

import './styles/App.css';


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

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    console.log(post);
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <Counter/>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px'}}/>
      <div>
        <MySelect
          defaultValue="Sort by"
          value={selectedSort}
          onChange={sortPosts}
          options={[
            {value: 'title', name: "По названию"},
            {value: 'body', name: "По описанию"}
          ]}
        />
      </div>
      {posts.length
        ? 
        <PostList remove={removePost} posts={posts} title={"Список постов:"}/> 
        :
        <h1 style={{textAlign:'center'}}>
          Список постов пуст.
        </h1>
      }
      
    </div>
  );
}

export default App;
