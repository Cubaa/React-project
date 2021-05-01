import React from 'react'
import styled from 'styled-components'

const WrapperYourPublications = styled.div`
display: flex;
height: 35%;
margin-top: 6px;
justify-content: center;
align-items: center;

>img{
    width: 18px;
    height: 18px;
    margin-right: 10px;
    margin-left: 5px;
}
>span{
    font-size: 13px;
    color: #2b2d42;
    font-weight: medium;
 font-family: 'Arial';
 margin-right: 45px;
}
>a{
    border: 1px solid #232C47;
    padding: 0px 7px;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
    
}
>a>img{
    width: 12px;
    height: 12px;
}
`

export const YourPublicationsBtn: React.FC = ()=>{
    return(
        <>
       <WrapperYourPublications> 
          
            <img src="/media/publications.svg" alt=""/>
            <span> Your Publications</span>
            <a>
                <img src="/media/plus.svg" alt=""/>
            </a>
        </WrapperYourPublications>
    </>
    )

}