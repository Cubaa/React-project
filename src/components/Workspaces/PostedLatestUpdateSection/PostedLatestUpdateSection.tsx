import React, {useState} from 'react'
import styled from 'styled-components'
import { MenuLatestUpdatePosts } from './MenuLatestUpdatePosts/MenuLatestUpdatePosts'
import {ISingleLatestPublication} from '../../../entities/usersLatestPosts'
import {LatestUpdatePosts} from '../PostedLatestUpdateSection/MenuLatestUpdatePosts/LatestUpdatePosts/LatestUpdatePosts'

const WrapperMenulatestUpdatePosts = styled.div`
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

const WrapperLatestUpdatePosts = styled.div`
box-sizing: border-box;
width: 100%;
min-height:10vh;

`

interface IPublications{
    publications: any[]
}

export const PostedLatestUpdateSection : React.FC<IPublications> = (props)=>{
    const [pagesNumber, setpagesNumber] = useState<any>(1)
    const [resetPage, setResetPage] = useState(0)
    const [isWrite, setIsWrite] = useState(false)
    const latestUpdatePublications = props.publications

    
    const numberofAllPosts = latestUpdatePublications.length
    const numberOfPostsArray = Math.ceil(numberofAllPosts/10)
    const numberOfposts = 10;
    let arrOftenPosts:any
    let allPosts: ISingleLatestPublication[]=[]
    let allPosts2: ISingleLatestPublication[]=[]
 
    for(let i=0; i<numberOfPostsArray; i++){
        arrOftenPosts= latestUpdatePublications.splice(0, numberofAllPosts<10 ?  numberofAllPosts : numberOfposts)
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
       
        
        
        let filteredPosts = posts2.flat().filter((item: ISingleLatestPublication, index: number)=>{
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
    const usersLatestUpdatePublications = props.publications
    const postedPodts = {usersLatestUpdatePublications, posts, pagesNumber, resetPage, isWrite}
    return(
        <>
         <WrapperMenulatestUpdatePosts>
                <MenuLatestUpdatePosts searchPost = {searchPost}/>
            </WrapperMenulatestUpdatePosts>
            <WrapperLatestUpdatePosts>
               <LatestUpdatePosts {...postedPodts}/> 
            </WrapperLatestUpdatePosts>
        </>
    )
}
