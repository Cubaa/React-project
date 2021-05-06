import React, {useEffect} from 'react'
import styled from 'styled-components'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'
import {ISingleLatestPublication} from '../../../../entities/usersLatestPosts'
import {ISingleUser} from '../../../../entities/users'

const WrapperTheNewestPublications = styled.div`
box-sizing: border-box;
position:relative;
width: 40%;
height:100%;
background-color: black;
z-index:999;

>img{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
}




`

const DarkLayout = styled.div`
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
background-color:rgba(0,0,0, 0.5);
z-index:9;
`
const WrapperUserInfo = styled.div`
padding:5px;
margin:0px 0px 20px 0px;
box-sizing: border-box;
position:absolute;
bottom:0;
left:0;
width:100%;
height: auto;

z-index:999;
flex-direction: column;
display: flex;
>p{
    color: white;
    z-index:10;
    font-size: 14px;
    
    width: 60%;
    text-align: left;
  
}
>a{
    display: block;
    width: 100%;
    font-size: 17px;
    margin:0;
    padding: 0px 0px 4px 5px;
    color: white;
    text-align: left;
    text-decoration: none;
}
>p: nth-of-type(1){
    display: flex;
    font-size: 12px;
 
    justify-content: left;
    align-items: center;
    margin:0;
    padding: 0px 0px 5px 5px;
  
}
>p: nth-of-type(1) span{
   margin-right: 8px;
   color: rgba(255, 255, 255, 0.8);
}
>p: nth-of-type(1) div{
    background-color: yellow;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
    margin-right: 8px;
 }
 >p: nth-of-type(1) div img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit:cover;
 }

`
const WrapperImg = styled.div`
display: flex;

align-items: center;
background-color: yellow;
width: 20px;
height: 20px;
border-radius: 50%;
border: 1px solid black;
margin-right: 15px;


`
const WrapperOtherLatestPublications = styled.div`
box-sizing: border-box;
margin:0;
padding:0;
width:60%;

display: flex;
flex-grow: 2;
padding: 5px;
align-items: flex-start;
flex-direction: column;
>h4{
    padding-left: 8px;
    margin:0;
    color: #232C47;
}
>a{
    margin:0;
    padding:0;
    font-size: 14px;
    margin-left: 8px;
    text-decoration: none;
    color: blue;
}
`
const WrapperLatestPublicationCard = styled.div`
display: flex;
flex-basis: 100%;
padding: 5px 5px 0px 5px;
justify-content: center;
`
const WrapperPublicationImage = styled.div`
box-sizing: border-box;
display: flex;
width: 90px;
height: 65px;
margin-top: 5px;
margin-bottom: 5px;
margin-left: 5px;
margin-right: 5px;


>img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
`
const WrapperUserDataCard = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
>a{
    margin:0;
   text-align:left;
    font-size: 16px;
    margin-left: 5px;
    color: #232C47;
    font-weight: bold;
    padding-bottom: 8px;
    text-decoration: none;
}
>p:nth-of-type(1){
    display: flex;
    align-items: center;
    margin:0;
    font-size: 10px;
    margin-left: 5px;
    margin-bottom:8px;
  
}
>p:nth-of-type(1) > div{
    width: 20px;
    height: 20px;
    background-color: yellow;
    border-radius: 50%;
    margin-right: 8px;
}
>p: nth-of-type(1) div img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit:cover;
 }
>p:nth-of-type(1)>span{
    margin-right: 8px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
}
`


interface IUserInfoData{
    usersLatestPublicationsList: ISingleLatestPublication[],
    loggedUser: ISingleUser[];
    userAvatar: string;
    
}




export const LatestPublications: React.FC<IUserInfoData> = (props)=>{

   console.log("chujek")
   const newArrayusersLatestpublicationsList = props.usersLatestPublicationsList?.map((item)=>item)
    newArrayusersLatestpublicationsList?.splice(0, (newArrayusersLatestpublicationsList.length-1)-3)
    const theNewestPublications = newArrayusersLatestpublicationsList?.splice(0, 1)
    
    console.log(newArrayusersLatestpublicationsList)
    console.log(theNewestPublications)


     
   
const otherLatestPublications = newArrayusersLatestpublicationsList.map((publication)=>{
return(
       <>
       {/* {console.log("LISTA PUBLIKCAJI " + usersLatestPublicationsList)}
       {console.log(usersLatestPublicationsList)} */}

            
           <WrapperLatestPublicationCard>
               <WrapperPublicationImage>
                     <img src="/media/scott-graham-OQMZwNd3ThU-unsplash (1).jpg" alt=""/>
               </WrapperPublicationImage>
              <WrapperUserDataCard>
                   <a href="#">{publication.title}</a>
                   <p>
                      <span>7 jan, 2020</span>
                         <div>
                           <img src={props.userAvatar} alt=""/>
                        </div>
                       <span>{props.loggedUser[0].name}</span>
                     </p>
                 </WrapperUserDataCard>
            </WrapperLatestPublicationCard>
       </>
   )
 })
    return(
        <>
      
            <WrapperTheNewestPublications>
                <DarkLayout></DarkLayout>
                <img src="/media/matthew-henry-VviFtDJakYk-unsplash (2).jpg" alt="image"/>
                <WrapperUserInfo>
                    <a href="#">{theNewestPublications[0]?.title}</a>
                    <p>
                        <span>7 jan, 2020</span>
                        <div>
                            <img src={props.userAvatar} alt=""/>
                        </div>
                        <span>{props.loggedUser[0].name}</span>
                    </p>
                </WrapperUserInfo>
            </WrapperTheNewestPublications>
            <WrapperOtherLatestPublications>
                <h4>Latest publications</h4>
                {otherLatestPublications}
                <a href="#">See more publications...</a>
            </WrapperOtherLatestPublications>
    
         
        </>
    )
}