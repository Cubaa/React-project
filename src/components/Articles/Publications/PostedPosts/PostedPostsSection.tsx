import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components'
import {MenuPostedPosts} from './MenuPostedPosts/MenuPostedPosts'
import {PostedPosts} from './PostedPosts/PostedPosts'
import {ISingleLatestPublication} from '../../../../entities/usersLatestPosts'
import {ISingleUser} from '../../../../entities/users'

const WrapperMenuPostedPosts = styled.div`
box-sizing: border-box;
width: 100%;
min-height: 10vh;
display:flex;
justify-content: space-between;
align-items: center;
>h4{
    padding-left: 20px;
    color: #232C47;
}
`
const WrapperPostedPosts = styled.div`
box-sizing: border-box;
width: 100%;
min-height:10vh;

`

interface IPostedPosts{
    loggedUser: ISingleUser[];
    yoursPosts: ISingleLatestPublication[];
    usersPublications: ISingleLatestPublication[];
}
export const PostedPostsSection: React.FC<IPostedPosts> = (props)=>{
    

    const usersAllPublications = props.usersPublications

    const numberofAllPosts = usersAllPublications.length
    const numberOfPostsArray = Math.ceil(numberofAllPosts/10)
    const numberOfposts = 10;
  
    const [pagesNumber, setpagesNumber] = useState<any>(10)
    const [filteredPosts, setFilteredPosts] = useState()
    const [resetPage, setResetPage] = useState(0)
    const [isWrite, setIsWrite] = useState(false)
    

    let arrOftenPosts:any
    let allPosts: ISingleLatestPublication[]=[]
    let allPosts2: ISingleLatestPublication[]=[]
 
    for(let i=0; i<numberOfPostsArray; i++){
       
        arrOftenPosts= usersAllPublications.splice(0, numberofAllPosts<10 ?  numberofAllPosts : numberOfposts)

        
        allPosts.push(arrOftenPosts)
        allPosts2.push(arrOftenPosts)
     
       
}
    

        const [posts, setPosts] = useState<any>(allPosts)
        const [posts2, setPosts2] = useState<any>(allPosts2)



        let arrOftenPosts2:ISingleLatestPublication
        let flatPosts: any = []
        const searchPost = (e: any) =>{
            setResetPage(0)
            setIsWrite(!isWrite)
            setPosts((prevstate: ISingleLatestPublication[])=>{
            return [...prevstate]
       })
       
        
        const searchingPost = e.target.value;
     
        let filteredPosts = posts2.flat().filter((item: any, index: number)=>{
            if(item.title.includes(e.target.value)){
                return item;
            }
           
        })
        const numberOfpage = Math.ceil(filteredPosts.length/10)
        for(let i=0; i<numberOfpage; i++){
            arrOftenPosts2= filteredPosts.splice(0, filteredPosts.length<10 ?  filteredPosts.length : numberOfposts)
            flatPosts.push(arrOftenPosts2)
        }
        
                setPosts(flatPosts)
                setPosts2((prevstate: ISingleLatestPublication[])=>{
                    return [...prevstate]
                    })
                setpagesNumber(numberOfpage)

    }
    
    const loggedUser = props.loggedUser
    const yoursPosts = props.yoursPosts
    const usersPublications = props.usersPublications
    const postedPodts = {loggedUser, yoursPosts, usersPublications, posts, pagesNumber, resetPage, isWrite}
    

    return(
        <>
            <WrapperMenuPostedPosts>
                <MenuPostedPosts searchPost = {searchPost}/>
            </WrapperMenuPostedPosts>
            <WrapperPostedPosts>
                <PostedPosts {...postedPodts}/>
            </WrapperPostedPosts>
        </>
    )
}