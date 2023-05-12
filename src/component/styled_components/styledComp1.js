import styled from 'styled-components';

const H1=styled.h1`
width:100px;
background:red;
color:white;
&:hover{
    color:yellow;
}
`
const Div=styled.div`
width:50%;
height:300px;
margin:10px auto;
border:1px solid #ccc;
border-radius:20px;
display:flex;
justify-content:space-around;

`
const P =styled.p`
text-align:center;
width:50%;
margin:10px auto;
`
export {H1,Div,P};