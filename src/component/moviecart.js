import React, { Component } from 'react';
import'../style/main.scss'

class Moviecard extends Component {


    render() { 
        const {title,poster,country}=this.props;
        return( <div className='movie-card'>
            <img src={poster} alt=""/>
            <h3>{title}</h3>
            <h4>{country}</h4>

        </div>);
    }
}
 
export default Moviecard;