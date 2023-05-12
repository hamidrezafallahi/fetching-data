import React, { Component } from 'react';
import styled from 'styled-components';

const P=styled.p`
text-align:center;
color:black;
background:${(props)=>(props.flag ? 'yellow' : 'green')};
height:200px;
border-radius:10px;
border:1px solid black;
margin:20px;
// display:${(props)=>(props.flag ? 'block' : 'none')};
`

class styledComp2 extends Component {
    constructor(){
        super();
        this.state={
            flag:false,
        }
    }
    changepstate=()=>{
        this.setState({
            flag:!this.state.flag
        });

    }
    render() { 
        return (<>
        
        
            <P flag={this.state.flag}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus molestias voluptates eum excepturi eaque deleniti dolores eos exercitationem, asperiores veniam corrupti expedita suscipit quam harum itaque! Quidem, saepe sed! Commodi quasi ea, voluptatum fuga neque eaque placeat eius totam officia? Quae soluta, dolore tenetur temporibus nisi quas expedita minima doloribus rerum. Quis cum unde autem quaerat. Earum quod saepe accusantium nihil dolorum voluptas. Dolore error necessitatibus veritatis vitae magni laudantium perferendis ut, facere quisquam, nulla alias culpa delectus minima obcaecati excepturi quibusdam deserunt laborum repudiandae eveniet nihil sit est laboriosam repellendus natus. Quod excepturi, nam ipsa nulla harum earum?
            </P>
            {
                (this.state.flag ?
                    (<button onClick={this.changepstate}>hide</button>)
                    :
                    (<button onClick={this.changepstate}>show</button>)
                )
            }

        </>);
    }
}
 
export default styledComp2;