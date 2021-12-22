import React, { useState, useRef, useMemo } from "react";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import PostForm from './components/PostForm';
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

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
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('Get posts');
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(searchQuery))
  }, [ searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      
      <PostForm create={createPost}/>
      <Counter/>
      <hr style={{margin: '15px'}}/>
      <div>
        <MyInput 
          placeholder="Search..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
      
      {sortedAndSearchedPosts.length
        ? 
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов:"}/> 
        :
        <h1 style={{textAlign:'center'}}>
          Список постов пуст.
        </h1>
      }
      
    </div>
  );
}

export default App;
