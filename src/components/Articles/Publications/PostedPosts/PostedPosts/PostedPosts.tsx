import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {PaginationPosts} from './PaginationPosts/PaginationPosts'
import {PublishedPosts} from './PublishedPosts/PublishedPosts'
import {ISingleLatestPublication} from '../../../../../entities/usersLatestPosts'
import {ISingleUser} from '../../../../../entities/users'
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
interface IPostedPosts{
    loggedUser: ISingleUser[];
    yoursPosts: ISingleLatestPublication[];
    usersPublications: ISingleLatestPublication[];
    posts: any[];
    pagesNumber: Number;
    resetPage: number;
    isWrite: boolean;
}

export const PostedPosts: React.FC<IPostedPosts> = (props)=>{
            const [page, setPage] = useState(0)
            
          console.log(props)
            const loggedUser = props.loggedUser
            const yoursPosts = props.yoursPosts
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
               console.log(pageNumber)
                setPage(pageNumber)
            }
          
            const postedPosts = {loggedUser, usersPublications, yoursPosts, page, resetPage, isWrite}
            const paginationInfo = {handleChangePageClick, numberOfPages, usersPublications}
            console.log(postedPosts)
    return(
        <>
        {console.log("rendering")}
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