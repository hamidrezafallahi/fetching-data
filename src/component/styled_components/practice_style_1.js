import styled from 'styled-components';

const IMG = styled.img`
width:170px;
height:100px;
border-radius:4px;

`

const CARD = styled.div`
border:1px solid gray;
border-radius:8px;
margin:8px;
width:200px;
height:250px;
background:#eee;
shadow-box:0 0 15px #CCC;
text-align:center;
padding:8px;

`
const PRICE=styled.span`
background:yellow;
font-size:1.2em;
`
const H2=styled.h2`
margin:0px;
`
const BTN=styled.button`
border:none;
background:none;
`
const P=styled.p`
text-align:center;
color:black;
margin:4px;
//
// 
`
const ACARDEON=styled.div`
border-radius:8px;
width:80%;
margin 100px auto;

`
const ACARDEON_HEADER=styled.a`
height:70px;
text-decoration:none;
color: white;
overflow:hidden;
`
const ACARDEON_CONTAINER=styled.div`
background:${(props)=>(props.flag ? 'blue':'#ccc')};
height:25px;
display:flex;
justify-content:space-between;
padding:8px; 
position:relative;
transition:all 0.3s;
border-radius:${(props)=>(props.flag ? '8px':'8px 8px 0px 0px')};

`
const ACARDEON_HEADER_NAME=styled.span`
background:none;
transition:all 0.3s;
color:${(props)=>(props.flag ? 'white' : 'black')};
`
const ACARDEON_ARROW=styled.span`
position:relative;
transition:all 0.3s;
transform: rotateX(${(props)=>(props.flag ? '-180deg' : '0deg')});
color:${(props)=>(props.flag ? 'white' : 'black')};
`
const ACARDEON_TOGGLE=styled.div`
display:flex;
justify-content:space-around;
border:${(props)=>(props.flag ? '0px' : '1px solid gray')};
border-radius:0 0 4px 4px;
position:relative;
transition:all 0.3s;
height:${(props)=>(props.flag ? '0px' : '284px')};
overflow:hidden;
`


export {IMG,CARD,PRICE,P,H2,BTN,ACARDEON,ACARDEON_HEADER,ACARDEON_CONTAINER,ACARDEON_HEADER_NAME,ACARDEON_ARROW,ACARDEON_TOGGLE};