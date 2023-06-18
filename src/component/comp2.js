import React, { Component } from 'react';
import Movicard from './Movicard'
import style from '../style/style.module.css'

class Comp1 extends Component {
    constructor(props){
        super(props);
        this.state={
            movies:[],
        }
    }
    sendrequest= ()=>{
        const xhr= new XMLHttpRequest();
        xhr.open('GET','https://moviesapi.ir/api/v1/movies?page={page}',true);
        xhr.onload=()=>{

            const fetch = JSON.parse(xhr.response)
            const database = fetch.data;
            this.setState({movies:database})

        }
        xhr.send(null);
    }
    render() { 
        return (<>
        <div>
            <button onClick={this.sendrequest}> fetching data</button>

        </div>

        <hr/>
        <div className={style.moviebox}>
            {
                this.state.movies.map((movie)=>(<Movicard title={movie.title} poster={movie.poster} country={movie.country} key = {movie.id}/>))
            }
        </div>
        </>);
    }
}
 
export default Comp1;