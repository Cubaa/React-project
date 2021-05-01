import React from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const WrapperEntities = styled.div`
display:flex;
align-items: center;
width: 90%;
margin-top: 18px;

>span{
    margin-left: 20px;
    color: #232C47;
    font-size: 13px;
}
>a{
    display: flex;
    align-items: center;
    font-size: 13px;
    text-decoration: none;
    color: #232C47;

}
`
const WrapperEntitiesImg = styled.div`
margin-right: 22px;
`
export const EntitiesBtn: React.FC = ()=>{
    return(
      <>
       <WrapperEntities>
           <WrapperEntitiesImg>        <a>
            <img src="/media/entities2.png" alt=""/>
        </a>
        </WrapperEntitiesImg>

        <Link to='/entities'>Entities</Link>
        </WrapperEntities>
      </>
    )

}