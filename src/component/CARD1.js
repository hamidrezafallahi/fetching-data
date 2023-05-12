import React, { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import {IMG,CARD,PRICE,P,H2,BTN} from './styled_components/practice_style_1.js'


class CARD1 extends Component {
    constructor(){
        super();
        this.state={
            flag:false,
            flag2:false,
        }
    }
    changepstate=()=>{
        this.setState({
            flag:!this.state.flag
        });
        
    }
    changespan=()=>{
        this.setState({
            flag2:!this.state.flag2
        })
        
    }
    render() { 
        return (<>
            <CARD>
                <IMG src={this.props.img} alt="" ></IMG>
                <H2>{this.props.name}</H2>
                <PRICE>{this.props.price}</PRICE>
                <P>{this.props.children}</P>
                <BTN onClick={this.changespan}>
                {
                   (this.state.flag2?
                        (<i className='fa fa-heart' style={{color:'red'}}></i>
                        
                        )
                        :
                        (
                            <i className='fa fa-heart-o'></i>
                        )
                    )
                }
                </BTN>
            </CARD>
        </>);
    }
}
 
export default CARD1;