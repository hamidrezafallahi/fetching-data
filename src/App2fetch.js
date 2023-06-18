import React from 'react';
// import Comp from './component/comp3fetch';
import Comp from './component/Comp5fetch';
import Compost from './component/Compost';
import './style/main.scss'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      posts:[],
    }
  }
  componentDidMount() {
    this.getposts();
  }
  getposts=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>(response.json()))
    .then((json)=>(this.setState({posts:json})))
    .then(console.log(this.state.posts))
  }

  render() {
    return (<>
      <Comp getposts={this.getposts}/>
      {this.state.posts.map((post)=>(<Compost body={post.body} key={post.id} id={post.id} title={post.title} />))}
    </>);
  }
}

export default App;

