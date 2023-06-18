import React from 'react'
import '../style/main.scss'
import style from '../style/style.module.css'
import Moviecard from './moviecart'
class Comp1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies:[]
        }
    }
    requestData=()=>{
        
        const xhr=new XMLHttpRequest();
        xhr.open('GET','https://moviesapi.ir/api/v1/movies?page={page}',true);
        xhr.onload=()=>{
            console.log(xhr.readyState)
            console.log(xhr.status)
            if(xhr.readyState===4){
                const response = xhr.response;
                const dataobj = JSON.parse(response);
                this.setState({movies:dataobj.data});
                
                
            }

        }
        xhr.send();

    }

    render() {
        console.log(this.state)
        return (<>
                <button onClick={this.requestData}className={style.btn}>Fetching data</button>
                <div className='movie-box' >
                {this.state.movies.map((movie)=>(<Moviecard key={movie.id} title={movie.title} poster={movie.poster} country={movie.country}/>))}

                </div>

        </>);
    }

}
export default Comp1;