import React from 'react'
// import '../style/main.scss'
// import style from '../style/style.module.css'
import Post from "./post"
class Comp3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errors: null,
        }
    }
    getpostshandler = () => {
        fetch("https://jsonplaceholder.typicode.com/postsss")
            .then((response) => {
                if (response.ok) { return response.json() }
                throw new Error("عدم دسترسی به سرور")
            })
            .then(json => this.setState({ posts: json }))
            .catch((wrror) => {
                this.setState({
                    errors: wrror
                })
            })
    }
    render() {
        return (<>
            <div >
                <div>
                    <button onClick={this.getpostshandler}>get posts</button>
                </div>
                {this.state.errors ?
                    <h2>{this.state.errors.message}</h2>
                    :
                    this.state.posts.map(post => <Post key={post.id} title={post.title} body={post.body} />)
                }
            </div>
        </>);
    }
}
export default Comp3;