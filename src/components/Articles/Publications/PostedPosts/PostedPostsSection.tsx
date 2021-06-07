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
//background-color: darkgrey;


`

interface IPostedPosts{
    loggedUser: ISingleUser[];
    yoursPosts: ISingleLatestPublication[];
    usersPublications: ISingleLatestPublication[];
}
export const PostedPostsSection: React.FC<IPostedPosts> = (props)=>{
    console.log(props)

    const usersAllPublications = props.usersPublications

    
    const numberofAllPosts = usersAllPublications.length
    const numberOfPostsArray = Math.ceil(numberofAllPosts/10)
    const numberOfposts = 10;
  
console.log(usersAllPublications)
    
    const [pagesNumber, setpagesNumber] = useState<any>(10)
    const [filteredPosts, setFilteredPosts] = useState()
    const [resetPage, setResetPage] = useState(0)
    const [isWrite, setIsWrite] = useState(false)
    //console.log(pagesNumber + " musi byvc git")

    let arrOftenPosts:any
    let allPosts: ISingleLatestPublication[]=[]
    let allPosts2: ISingleLatestPublication[]=[]
 console.log(allPosts)
    for(let i=0; i<numberOfPostsArray; i++){
       
        arrOftenPosts= usersAllPublications.splice(0, numberofAllPosts<10 ?  numberofAllPosts : numberOfposts)

        console.log("Loguje: ", arrOftenPosts)
        allPosts.push(arrOftenPosts)
        allPosts2.push(arrOftenPosts)
        // setAllPosts(["a"])
       
}
    // console.log(posts)
    
  
    console.log("postedPosts")
   
    console.log(allPosts)
    const [posts, setPosts] = useState<any>(allPosts)
    const [posts2, setPosts2] = useState<any>(allPosts2)
console.log(posts)

let d: any = []
let arrOftenPosts2:any
let flatPosts: any = []
    const searchPost = (e: any) =>{
       console.log(posts)
       console.log(posts2)
       setResetPage(0)
       setIsWrite(!isWrite)
       setPosts((prevstate: ISingleLatestPublication[])=>{
           return [...prevstate]
       })
       
        console.log("szukam " + e.target.value)
        const searchingPost = e.target.value;
     
        let filteredPosts = posts2.flat().filter((item: any, index: number)=>{
            //console.log(item, index)
            if(item.title.includes(e.target.value)){
                console.log(item)
                return item;
            }
           
        })
        const numberOfpage = Math.ceil(filteredPosts.length/10)
        for(let i=0; i<numberOfpage; i++){
       
            arrOftenPosts2= filteredPosts.splice(0, filteredPosts.length<10 ?  filteredPosts.length : numberOfposts)
    
            //console.log("Loguje: ", arrOftenPosts2)
            flatPosts.push(arrOftenPosts2)
            // setAllPosts(["a"])
           
    }
        console.log("CHUJE MUJE DZIKIER WIEZE")
        console.log(flatPosts)
console.log(filteredPosts)

console.log(numberOfpage)
setPosts(flatPosts)
setPosts2((prevstate: ISingleLatestPublication[])=>{
    return [...prevstate]
})
setpagesNumber(numberOfpage)
//allPosts=filteredPosts
console.log(allPosts)

    }
    //console.log(allPosts)







    
    const loggedUser = props.loggedUser
    const yoursPosts = props.yoursPosts
    const usersPublications = props.usersPublications
    const postedPodts = {loggedUser, yoursPosts, usersPublications, posts, pagesNumber, resetPage, isWrite}
    console.log(postedPodts)

    return(
        <>
        {console.log("1111111111111111111111111111111111")}
            <WrapperMenuPostedPosts>
                <MenuPostedPosts searchPost = {searchPost}/>
            </WrapperMenuPostedPosts>
            <WrapperPostedPosts>
                <PostedPosts {...postedPodts}/>
            </WrapperPostedPosts>
        </>
    )
}