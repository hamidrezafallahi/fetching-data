import React, { Component } from 'react';
class Movicard extends Component {
    render() { 
        const{title,poster,country,id}=this.props;
        return <>
        <div key = {id}>
            <img src={poster} alt=""/>
            <h3>{title}</h3>
            <h6>{country}</h6>
        </div>
        </>;
    }
}
 
export default Movicard;