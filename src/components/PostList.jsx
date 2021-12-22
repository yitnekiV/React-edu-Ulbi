import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from "./PostItem";

export default function PostList({posts, title, remove}) {
    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не нейдены!
            </h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            <TransitionGroup>
                {
                    posts.map((post, index) => {
                        return <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem remove={remove}  number={index + 1} data = {post}/>
                        </CSSTransition>
                    })
                }
            </TransitionGroup>
        </div>
    )
}
