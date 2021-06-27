import React, { Component } from 'react'
import styled from 'styled-components'
import {NetworkBtn} from '../ProfileMenu/NetworkBtn/NetworkBtn'
import {YourPublicationsBtn} from './PublicationsBtn/YourPublicationsBtn'
const WrapperProfileDetails = styled.div`
width: 100%;
height: 60vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
>div{
    width: 60px;
    height: 60px;
    border: .1px solid lightgrey;
    border-radius: 50%;
    margin-bottom: 8px;
}
>div>img{
    width:100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
>span:nth-of-type(1){
    margin-bottom: 10px;
    color: #184e77;
    font-weight: bold;
}
>span:nth-of-type(2){
    margin-bottom: 10px;
    color:#6c757d;
  
    font-size: 14px;
}
>span:nth-of-type(3){
    width: 100%;
    height: 1px;
    background-color:lightgrey;
    
}
`
const WrapperProfileOptions = styled.div`
width: 100%;
height: 18vh;
padding-left: 5px;
padding-right: 5px;
`
interface IUserData{
    name: string;
    companyName: string;
    catchPhrase: string;
}

interface IUserInfo{
    userData: IUserData,
    userAvatar: string;
}


export const ProfileMenu: React.FC<IUserInfo>= (props)=>{
    
    return(
        <>
        <WrapperProfileDetails>
           {/* <img src="" alt=""/>  tymczasowo tworzę diva, który będzie symulował zdjęcie profilowe użytkownika*/} 
           <div>
               <img src={props.userAvatar} alt=""/>
           </div>
            <span>{props.userData.name}</span>
            <span>{props.userData.catchPhrase} - {props.userData.companyName}</span>
            <span></span>
        </ WrapperProfileDetails>  
        <WrapperProfileOptions>
        
            <NetworkBtn />
            <YourPublicationsBtn />
        </WrapperProfileOptions>
        </>
    )
}