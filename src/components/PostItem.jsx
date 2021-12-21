import React, {useState} from "react";

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
                <button onClick={() => props.remove(props.data)}>Delete</button>
            </div>
        </div>



    )
}

export default PostItem;