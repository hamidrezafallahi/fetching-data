import React from 'react';
//import  '../style/comp4.css';
import Comp5 from './comp5';
import mystyle from '../style/comp4.module.css'
const Comp4 = ( ) => {
    return ( <>
    {/* <div className='box'> */}
    <div className={mystyle.box}>
        <h1>comp 4</h1>
    <Comp5 ></Comp5>
    </div>
    </> );
}
 
export default Comp4;