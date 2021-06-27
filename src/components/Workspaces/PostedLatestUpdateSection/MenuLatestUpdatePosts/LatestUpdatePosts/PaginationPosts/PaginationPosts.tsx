import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {ISingleLatestPublication} from '../../../../../../entities/usersLatestPosts'


const WrapperPagination = styled.div`
display: flex;
justify-content:center;
align-items:center;
height:100%;
width:40%;
`
const SingleIcon = styled.div`
width: 20px;
height: 20px;
margin-right: 8px;
padding: 3px;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 500;
color: balck;
display:flex;
justify-content: center;;
align-items: center;
cursor: pointer;

`


interface IPagination{
    handleChangePageClick(e:any):void;
    numberOfPages: Number;
    usersPublications: ISingleLatestPublication[];
  
}
export const  PaginationPosts: React.FC<IPagination> = (props)=>{
   

    const numbers:number[] = []

    for(let i=0;i<props.numberOfPages;i++){
        numbers.push(i)
        }

       const pagination = numbers.map((num, index)=>{
        return(<SingleIcon key={index} data-pagenumber = {index} onClick = {(e) =>props.handleChangePageClick(e)}>{index+1}</SingleIcon>)
    })
    return(
        <>                  
            <WrapperPagination>
                {pagination}
            </WrapperPagination>
        </>
    )
}