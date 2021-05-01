
import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const WrapperPublications = styled.div`
display:flex;
align-items: center;
width: 90%;

margin-top: 18px;

>a{
    
    color: #232C47;
    font-size: 13px;
    text-decoration: none;
}

`
const WrapperPublicationsImg = styled.div`
margin-right: 20px;
`

export const PublicationsBtn: React.FC = ()=>{
    return(
      <>
      <WrapperPublications>
        <WrapperPublicationsImg>
        <a>
            <img src="/media/publications.svg" alt=""/>
        </a>
        </WrapperPublicationsImg>
        <Link to="/publications">Publications</Link>
        </WrapperPublications>
      </>
    )

}