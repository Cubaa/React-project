import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const WrapperEcosystem = styled.div`
display:flex;
align-items: center;
width: 90%;
margin-top: 20px;

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
const WrapperEcosystemImg = styled.div`
margin-right: 22px;
`
export const EcosystemBtn: React.FC = ()=>{
    return(
      <>
       
      <WrapperEcosystem>
      <WrapperEcosystemImg>
        <a>
            <img src="/media/ecosystem.svg" alt=""/>
        </a>
        </WrapperEcosystemImg>
        <Link to='/ecosystem'>Ecosystem</Link>
        </WrapperEcosystem>
      
      </>
    )

}