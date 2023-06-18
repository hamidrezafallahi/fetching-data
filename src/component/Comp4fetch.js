import React, { Component } from 'react'

class Comp4fetch extends Component {

    insertposthandler=()=>{
        const url="https://jsonplaceholder.typicode.com/posts";
        const method = "POST";
        const body =JSON.stringify({
        userid:23,
        title:"post23",
        body:"post23 post23 post23 post23 post23 post23 post23 "
    }) ;
        const headers = {
        "content-type":"application/json;charset=UTF-8",
    };

    fetch(url,{
    method:method,
    body:body,
    headers:headers,
    })
        .then((response)=>(response.json()))
        .then((json)=>(console.log(json)))
    }
    render() {
        return (
            <div>
                <button onClick={this.insertposthandler}>insert post </button>
            </div>
        )
    }
}
export default Comp4fetch;