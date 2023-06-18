import React, { Component } from 'react';
import style from "../style/style.module.css"
class Post extends Component {
    render() { 
        const{title,body}=this.props;
        return (<>
        <div className={style["post-body"]}>
            <h2>{title}</h2>
            <p>{body}</p>
            <button>delete</button>
        </div>
        </>  );
    }
}
 
export default Post;