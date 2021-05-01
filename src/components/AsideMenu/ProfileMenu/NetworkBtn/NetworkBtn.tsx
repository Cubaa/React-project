import React from 'react'
import styled from 'styled-components'

const WrapperNetwork = styled.div`
display: flex;
height: 35%;

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
 margin-right: 68px;
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

export const NetworkBtn: React.FC = ()=>{
    return(
        <>
       <WrapperNetwork> 
          
            <img src="/media/people.svg" alt=""/>
            <span> Your network</span>
            <a>
                <img src="/media/plus.svg" alt=""/>
            </a>
        </WrapperNetwork>
    </>
    )

}