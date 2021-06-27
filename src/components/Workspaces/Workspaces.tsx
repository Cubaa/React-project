import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled  from 'styled-components'
import {PostedLatestUpdateSection} from './PostedLatestUpdateSection/PostedLatestUpdateSection'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";


  const WrapperLatestUpdateSection = styled.div`
box-sizing: border-box;
width: 93%;
min-height: 80vh;
display: flex;
margin-top: 20px;
margin-bottom: 20px;
flex-direction: column;

`
const WorkspaceNameWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
min-height: 2vh;
background-color: whitesmoke;
border-radius: 5px;
box-shadow: 0 1px 6px -2px rgba(0,0,0,.2), 0 1px 6px -2px rgba(0,0,0,.2);
`
const WorkspaceImageWrapper = styled.div`
width: 100%;
height: 200px;
border-top-left-radius: 8px;
    border-top-right-radius: 8px;
>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
`
const WorkspaceInfoWrapper = styled.div`
display: flex;
position: relative;
>div:nth-of-type(1){
    display: flex;
    justify-content: center;
    align-items:center;
    width: 8%;

  
    padding: 0px 5px 5px 5px;
    >img{
      
        width: 40px;
    }
   
}
>div:nth-of-type(2){
        display: flex;
        width: 92%;
     
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 8px 5px 30px 5px;
        >h3{
            margin: 0;
            padding: 0;
            color: #090958;
            font-weight: bold;
            padding-bottom: 10px;
        }
        >p{
            margin:0;
            padding: 0;
            text-align: left;
            font-size: 14px;
            color: #0b4f79;
        }
    }
    >div:nth-of-type(3){
        position: absolute;
        top:10%;
        left:95%;
       img{
           width: 20px;
       }
    }
`


const WorkspaceCards = styled.div`
width: 100%;
min-height: 2vh;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 5px;
padding-left: 10px;
padding-right: 10px;
padding-bottom: 10px;
background-color: #d2d2f5;
box-sizing: border-box;
margin-top: 20px;
`
const InfoWorkspaceCardsWrapper = styled.div`
box-sizing: border-box;
width: 100%;
display: flex;
align-items: center;

justify-content: space-between;
padding: 10px;
>p{
    margin:0;
    color: #aca5a5;
    font-weight: bold;
}
>span{
    margin:0;
    font-weight: bold;
    color: #aca5a5;
    
}

`
const CardsWrapper = styled.div`
box-sizing: border-box;
width: 100%;
display: flex;


>div{
    width: 33%;
   padding: 10px;
    margin: 5px;
    border-radius: 4px;
  background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    box-shadow: 0 1px 6px -2px rgba(0,0,0,.2), 0 1px 6px -2px rgba(0,0,0,.2);
    >p{
        text-align: left;
        margin-top:10px;
        color: #090958;
    }
    >span{
        margin-top: 10px;
        font-size: 18px;
    }
}
>div:nth-of-type(1){
   >div{
       img{
           width: 30px;
       }
   }
}
>div:nth-of-type(3){
    
}
`

interface IParam{
    name: string;
}

export const Workspaces:React.FC = ()=>{
    let {name} = useParams<IParam>()
const latestUpdatesPublications = [
    {
        title: "World company SAS",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum alias consequatur eius facere nemo minus quis autem ipsam excepturi quia, nam qui voluptatem sed incidunt aliquam veniam dolorum. Quia, quibusdam.",
        sign: "SAS"

    },
    {
        title: "World company MENA SARL",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum alias consequatur eius facere nemo minus quis autem ipsam excepturi quia, nam qui voluptatem sed incidunt aliquam veniam dolorum. Quia, quibusdam.",
        sign: "SARL"

    },
    {
        title: "World company SAS",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum alias consequatur eius facere nemo minus quis autem ipsam excepturi quia, nam qui voluptatem sed incidunt aliquam veniam dolorum. Quia, quibusdam.",
        sign: "SAS"

    },
    {
        title: "World company SAS",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum alias consequatur eius facere nemo minus quis autem ipsam excepturi quia, nam qui voluptatem sed incidunt aliquam veniam dolorum. Quia, quibusdam.",
        sign: "SAS"

    },
    {
        title: "World company SAS",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum alias consequatur eius facere nemo minus quis autem ipsam excepturi quia, nam qui voluptatem sed incidunt aliquam veniam dolorum. Quia, quibusdam.",
        sign: "SAS"

    },
    {
        title: "World company SAS",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum alias consequatur eius facere nemo minus quis autem ipsam excepturi quia, nam qui voluptatem sed incidunt aliquam veniam dolorum. Quia, quibusdam.",
        sign: "SAS"

    },
    {
        title: "World company SAS",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum alias consequatur eius facere nemo minus quis autem ipsam excepturi quia, nam qui voluptatem sed incidunt aliquam veniam dolorum. Quia, quibusdam.",
        sign: "SAS"

    },
    {
        title: "World company SAS",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum alias consequatur eius facere nemo minus quis autem ipsam excepturi quia, nam qui voluptatem sed incidunt aliquam veniam dolorum. Quia, quibusdam.",
        sign: "SAS"

    },
    {
        title: "World company SAS",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum alias consequatur eius facere nemo minus quis autem ipsam excepturi quia, nam qui voluptatem sed incidunt aliquam veniam dolorum. Quia, quibusdam.",
        sign: "SAS"

    },
    {
        title: "World company SAS",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum alias consequatur eius facere nemo minus quis autem ipsam excepturi quia, nam qui voluptatem sed incidunt aliquam veniam dolorum. Quia, quibusdam.",
        sign: "SAS"

    }
]


    return(
        <>
            <WorkspaceNameWrapper>
                <WorkspaceImageWrapper>
                    <img src="/media/scott-graham-OQMZwNd3ThU-unsplash (1).jpg" alt="" />
                </WorkspaceImageWrapper>
                <WorkspaceInfoWrapper>
                    <div>
                        <img src="/media/entities2.svg" alt="" />
                    </div>
                    <div>
                        <h3>{name}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum alias consequatur eius 
                            facere nemo minus quis autem ipsam excepturi quia, nam qui voluptatem sed incidunt 
                            aliquam veniam dolorum. Quia, quibusdam.</p>
                    </div>
                    <div>
                        <img src="/media/cog.svg" alt="" />
                    </div>
                  
                </WorkspaceInfoWrapper>
                </WorkspaceNameWrapper>
                <WorkspaceCards>
                    <InfoWorkspaceCardsWrapper>
                        <p>Start working on corporate matters</p>
                        <span>Hide</span>
                    </InfoWorkspaceCardsWrapper>
                    <CardsWrapper>
                    <div>
                        <div>
                            <img src="/media/entities.svg" alt="" />
                        </div>
                        <span style={{color: "#090958"}}>Explore the <span style={{color: "darkblue", fontWeight: "bold"}}>entities</span></span>
                        <p>Take a few minutes to look at the most important elements and specificites og your entities
                        </p>
                    </div>
                    <div>
                        <div>
                        <FontAwesomeIcon style={{fontSize: "35px", color: "#090958"}} icon={['fas', 'calendar-alt']}/>
                        </div>
                        <span style={{color: "#090958"}}>Structure your <span style={{color: "#090958", fontWeight: "bold"}}>owenrship</span></span>
                        <p>Take a few minutes to look at the most important elements and specificites og your
                            entities
                        </p>
                    </div>
                    <div>
                        <div>
                        <FontAwesomeIcon style={{fontSize: "35px", color: "#090958"}} icon={['fas', 'calendar-alt']}/>
                        </div>
                        <span style={{color: "#090958"}}>Define the <span style={{color: "#090958", fontWeight: "bold"}}>calendar</span></span>
                        <p>Take a few minutes to look at the most important elements and specificites og your
                            entities
                        </p>
                    </div>
                    </CardsWrapper>
                </WorkspaceCards>
                <WrapperLatestUpdateSection>
                <PostedLatestUpdateSection publications = {latestUpdatesPublications}/>
            </WrapperLatestUpdateSection>
        </>
    )
}