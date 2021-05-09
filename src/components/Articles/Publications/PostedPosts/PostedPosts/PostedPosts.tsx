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
height: 95%;
background-color: red;
`
const WrapperPaginationPosts = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 5%;
background-color: yellow;
`
interface IPostedPosts{
    loggedUser: ISingleUser[];
    yoursPosts: ISingleLatestPublication[];
    usersLatestPublicationsList: ISingleLatestPublication[];
}

export const  PostedPosts: React.FC<IPostedPosts> = (props)=>{
    
    const loggedUser = props.loggedUser
    const yoursPosts = props.yoursPosts
    const usersLatestPublicationsList = props.usersLatestPublicationsList
    console.log(props.usersLatestPublicationsList)
    const numberofAllPosts = props.usersLatestPublicationsList.length
    const numberOfPostsArray = numberofAllPosts/10
    const numberOfposts = 10;
    console.log(numberOfPostsArray)
    console.log(Math.ceil(numberOfPostsArray))
    
  

    console.log(props.usersLatestPublicationsList.length-1)
    
            const allPosts:any[]=[]
            let arrOftenPosts: ISingleLatestPublication[] = []
        for(let i=0; i<Math.ceil(numberOfPostsArray); i++){
           
            console.log(props.usersLatestPublicationsList.length-1)
            arrOftenPosts= props.usersLatestPublicationsList?.splice(0, props.usersLatestPublicationsList.length<10 ?  props.usersLatestPublicationsList.length : numberOfposts)
            console.log("Loguje: ", arrOftenPosts)
            allPosts.push(arrOftenPosts)
        }
        
   console.log(allPosts)
   useEffect(()=>{
       console.log(allPosts)
   },[allPosts])
    const postedPosts = {loggedUser, allPosts, yoursPosts}
    console.log(postedPosts)


 
    return(
        <>
        <WrapperPostsPaginationPosts>
            <WrapperPublishedPosts>
                <PublishedPosts {...postedPosts}/>
            </WrapperPublishedPosts>
            <WrapperPaginationPosts>
                <PaginationPosts data = {allPosts}/>
            </WrapperPaginationPosts>
        </WrapperPostsPaginationPosts>
        </>
    )
}