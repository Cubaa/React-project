import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {PublishedPosts} from '../LatestUpdatePosts/PublishedUpdatePosts/PublishedUpdatePosts'
import {PaginationPosts} from './PaginationPosts/PaginationPosts'
const WrapperPostsPaginationPosts = styled.div`
display: flex;
flex-direction: column;
height: 100%;

`
const WrapperPublishedPosts = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 10vh;
//background-color: red;
`
const WrapperPaginationPosts = styled.div`
display: flex;
flex-direction: row;
justify-content:center;
width: 100%;
height: 5%;
margin-top: 10px;
//background-color: yellow;
`
interface ILatestPostedPosts{
    usersLatestUpdatePublications: any[];
    posts: any;
    pagesNumber: any;
    resetPage: number;
    isWrite: boolean;
}

export const LatestUpdatePosts: React.FC<ILatestPostedPosts> = (props)=>{
    const [page, setPage] = useState(0)
            
          
        
         const usersPublications = props.posts
            const numberOfPages = props.pagesNumber
            const resetPage = props.resetPage
            let isWrite = props.isWrite
           
            useEffect(()=>{
               
                    setPage(resetPage)
                   
            }, [isWrite])

            const handleChangePageClick = (e:any)=>{
                e.preventDefault()
                const pageNumber = e.target.dataset.pagenumber
               
                setPage(pageNumber)
            }
          
            const postedPosts = {usersPublications, page, resetPage, isWrite}
            const paginationInfo = {handleChangePageClick, numberOfPages, usersPublications}
            
    return(
        <>
         
        <WrapperPostsPaginationPosts>
            <WrapperPublishedPosts>
                <PublishedPosts {...postedPosts}/>
            </WrapperPublishedPosts>
            <WrapperPaginationPosts>
           <PaginationPosts {...paginationInfo}/> 
            </WrapperPaginationPosts>
        </WrapperPostsPaginationPosts>
        </>
        
    )
}