import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate } from 'react-router-dom'

const PostItem = (props) => {
    const navigate = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <h2>{props.data.id} {props.data.title}</h2>
                <div>
                    <strong>{props.data.body}</strong>
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => navigate(`/posts/${props.data.id}`)}>
                    Open
                </MyButton>
                <MyButton onClick={() => props.remove(props.data)}>
                    Delete
                </MyButton>
            </div>
        </div>



    )
}

export default PostItem;