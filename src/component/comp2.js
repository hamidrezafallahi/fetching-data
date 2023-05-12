import React, { Component } from 'react';
// const style1={background:"red",color:"#f0f"}


class Comp2 extends Component {
    style1={background:"red",color:"#f0f"}
    render() { 
        return (
        <>
                <h3 style={this.style1}>hello css react</h3>
                {/* <h3 style={style1}>hello css react</h3> */}
        </>
        )
    }
}
 
export default Comp2;