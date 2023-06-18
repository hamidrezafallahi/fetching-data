import React, { Component } from 'react'
import style from "../style/style.module.css"
 class Compost extends Component {

    delete1=()=>{
        const{id}=this.props;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
          method:"DELETE",
        })
        // .then((response)=>console.log(response))
        .then((response)=>response.json())
        .then((json)=>(console.log(json+"success"+id)))
      }
    render() {
        const{id,body,title,}=this.props;
        return (
            <div className={style.compost}>
               <h2>{title}</h2>
               <p>{body}</p>
               <h4>{id}</h4>
               <button onClick={this.delete1}>delete</button> 
            </div>
        )
    }
}
export default Compost;