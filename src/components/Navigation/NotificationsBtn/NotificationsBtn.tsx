import React from 'react'
import styled from 'styled-components'

const WrapperAllNotifications = styled.div`
display: flex;
width: 34%;
height: 7vh;
margin-right: 10px;
align-items: center;
justify-content: space-around;
margin-top: 2px;

>a{
    cursor: pointer;
    position: relative;
}
>a:nth-of-type(2){
  
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-center: center;
   padding: 8px;
   background-color: #dee2e6;
   margin-left: 10px;
}
>a:nth-of-type(3){
  
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-center: center;
    padding: 8px;
    padding-left: 11px;
    padding-right: 11px;
    background-color: #dee2e6;
 }
 >a span{
     
     display: flex;
     justify-content: center;
     align-items: center;     
     font-size: 10px;
     background-color: #168aad;
     position:absolute;
     top:-4%;
     left: 60%;
     color:white;
     width: 21px;
     height: 15px;
     border-radius: 40%;
 }
 
 
`
export const NotificationsBtn: React.FC = ()=>{
    return(
        <>
        <WrapperAllNotifications>
            <a>
                <img src="/media/house.svg" alt=""/>
            </a>
            <a>
                <img src="/media/comments.svg" alt=""/>
                <span>3</span>
            </a>
            <a>
                <img src="/media/bell.svg" alt=""/>
                <span>3</span>
            </a>
        </WrapperAllNotifications>
        </>
    )
}