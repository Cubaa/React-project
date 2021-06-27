import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {ISingleLatestPublication} from '../../../../../../entities/usersLatestPosts'
import {ISingleUser} from '../../../../../../entities/users'



const WrapperSingleCard = styled.div`
box-sizing: border-box;
width:100%;
height: 18vh;
margin:0;
padding:0;
background-color: whitesmoke;
display: flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
padding-top: 8px;
margin: 10px 0 0 0;
font-family: 'Roboto', sans-serif;
padding-left:10px;
padding-right: 10px;
box-shadow: 0 1px 6px -2px rgba(0,0,0,.2), 0 1px 6px -2px rgba(0,0,0,.2);

>p:nth-of-type(1){
    padding:0;
    margin:0;
    //background-color: red;
    font-weight: 500;
    color: #232C6B;
    font-size: 18px;
    height: 5vh;
}
>p:nth-of-type(2){
    padding:0;
    margin:0;
    //background-color: green;
   display: flex;
   align-items: center;
    height: 5vh;
    font-size: 14px;
}
`

const WrapperCardInfo = styled.div`
display: flex;
justify-content: space-between;
width:40%;
height: 5vh;
align-items:center;
color: rgba(0,0,0, 0.5);
>div{
    
    width: 4px;
    height: 4px;
    background-color: black;
    border-radius: 50%;
}
>span{
 
    font-size: 12px;
}

`

interface IPostedPosts{
    usersPublications: any;
    page: number;
    resetPage: number;
    isWrite: boolean;
}
export const PublishedPosts: React.FC<IPostedPosts> = (props)=>{
    const resetPage = props.resetPage
    let page = props.page
   
    const filteredCard = props.usersPublications.filter((el:any, index:any)=>{
            return el
    })
   
        const publicationCards= [filteredCard[props.page]]?.map((item:any, index:any)=>{
        return(
         
            <div>
               {item?.map((el:any)=>{return(
                   <WrapperSingleCard>
                        <p>{el.title}</p>
                        <p>{el.content}</p>
                        <WrapperCardInfo>
                            <span>{el.sign}</span>
                            <div></div>
                            <span>Client contract</span>
                            <div></div>
                            <span>updated 3 days ago by John Doe</span>
                        </WrapperCardInfo>
                    </WrapperSingleCard>
               )})}
            </div>
        )
   })

//
    return(
        <>
          {publicationCards}  
        </>
    )
}