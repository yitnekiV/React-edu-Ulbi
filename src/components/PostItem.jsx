import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post__content">
                <h2>{props.number} {props.data.title}</h2>
                <div>
                    <strong>{props.data.body}</strong>
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.remove(props.data)}>Delete</MyButton>
            </div>
        </div>



    )
}

export default PostItem;