import React, { Component } from 'react';
import CARD1 from './CARD1';
//import styled from 'styled-components';
import {ACARDEON,ACARDEON_HEADER,ACARDEON_CONTAINER,ACARDEON_HEADER_NAME,ACARDEON_ARROW,ACARDEON_TOGGLE} from './styled_components/practice_style_1.js'
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';


class ReactPracticeNum1 extends Component {
    constructor(){
        super();
        this.state={
            flag:false,
        }      
    }
            change_flag=()=>{
                console.log(this.state.flag)
                this.setState({
                    flag:!this.state.flag,
                });  


            }
    render() { 
        return (<>
            <ACARDEON>
                <ACARDEON_HEADER href="#" onClick={this.change_flag} >
                    <ACARDEON_CONTAINER flag={this.state.flag}>
                        <ACARDEON_HEADER_NAME flag={this.state.flag} >Digital products</ACARDEON_HEADER_NAME>
                        <ACARDEON_ARROW flag={this.state.flag}>&#9650;</ACARDEON_ARROW>
                    </ACARDEON_CONTAINER>
                </ACARDEON_HEADER>
                    <ACARDEON_TOGGLE flag={this.state.flag}>
                            <CARD1 name="product_1" price="230$" img={img1}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CARD1>
                            <CARD1 name="product_2" price="250$" img={img2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CARD1>
                            <CARD1 name="product_3" price="120$" img={img3}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CARD1>
                            <CARD1 name="product_4" price="320$" img={img4}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CARD1>
                    </ACARDEON_TOGGLE>

            </ACARDEON>
        </>);
    }
}
export default ReactPracticeNum1;