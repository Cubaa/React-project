import React from 'react'

import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

const WrapperHomeBtn = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
position:relative;
width: 20vh;
height:7vh;
margin-left: 10px;
cursor: pointer;
text-align: right;
>a{
    margin-left: 10px;
}
>span{
    margin-left: 10px;
    font-size: 14px;
    font-weight:bolder;
    color: #232C47;
}
`
export const HomeBtn: React.FC = ()=>{
    return(
        <WrapperHomeBtn>
        <Link to="/">
            <img src="/media/house2.svg" alt="homeBtn" style={{width:'100%', height:'100%'}}/>
        </Link>
        <span>Home</span>
        </WrapperHomeBtn>
    )
}