import React, { Component } from 'react'

class Comp5fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    insertpost = () => {
        const method="POST";
        const body= JSON.stringify({
                    id: 1,
                    title: "post24 post24 post24 post24 post24 post24 ",
                    body: "post25 post25 post25 post25 post25 post25 post25 post25 post25 post25 post25 post25 post25 "
                });
        const headers = {
                    "content-type": "application/json;charset=UTF-8"
                };
        fetch("https://jsonplaceholder.typicode.com/posts",
            {
                method: method,
                body:body ,
                headers: headers
            },

        )
        .then((response)=>(response.json()))
        .then((json)=>(console.log(json)))

    }
    deletepost = () => {

    }
    render() {
        return (
            <>
                <div>
                    <button onClick={this.insertpost}>insert post</button>
                    <button onClick={this.deletepost}>delete post</button>
                </div>
            </>
        )
    }
}
export default Comp5fetch;