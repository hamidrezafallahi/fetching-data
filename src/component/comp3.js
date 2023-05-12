import React from 'react'
import Radium from 'radium'

const style1={
    background:"yellow",
    color:"blue",
    border:"1px solid #ccc",
    padding:"5px",
    margin:"5px",
    ":hover":{
        color:"black",
        background:"yellow",
    }
}
const Comp3 = () => {
    return ( 
        <>
            <h1 style={style1}>mehdi abbasi 2</h1>
        </>
     );
}
 
export default Radium(Comp3);