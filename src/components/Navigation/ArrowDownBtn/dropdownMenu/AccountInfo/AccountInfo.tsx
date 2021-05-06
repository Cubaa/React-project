import React, { ReactNode } from 'react'
import styled from 'styled-components'


const WrapperAccountInfo = styled.div`

box-sizing: border-box;
margin:0;
display: flex;
flex-direction: column;
padding:0;
height: auto;
width: 100%;
>p{
    box-sizing: border-box;
    text-align: left;
    margin:0;
    padding: 3px 0px 0px 8px;
   
    font-size: 12px;
    font-weight: bold;
    color: grey;
}
>ul{
    border-box: box-sizing;
    padding: 0;
    margin:0;
    list-style: none;
}
ul>li{
    width:100%;
    display: flex;
    margin:0;
    justify-content: center;
    align-items: center;
}
`
const WrapperUserInfo = styled.div`
box-sizing: border-box;

display: flex;

width: 80%;

height: 10vh;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding-left: 20px;

>a{
    text-decoration: none;
        color: deepblue;
    font-size: 11px;
}
>span{
    
    font-weight:bolder;
    color: #232C47;
}
`
const WrapperUserImg = styled.div`
box-sizing: border-box;
margin-left: 10px;
width: 30px;
height: 30px;
border:1px solid black;
border-radius: 50%;
>img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
`
const WrapperAccountSettings = styled.div`
display: flex;
flex-direction: column;
width:100%;

`
const WrapperPrivacyAccount = styled.div`
display: flex;
align-items:center;
box-sizing: border-box;
margin-left: 20px;
background-color: white;
>img{
    width: 25px;
}
>li{
    margin-left: 20px;
    font-size: 14px;
    font-weight:bolder;
 
}
>li a{
    text-decoration: none;
    color: #232C47;
}
`
const WrapperSettingsAccount = styled.div`
display: flex;
align-items: center;
box-sizing: border-box;
margin-left: 20px;
background-color: white;
padding-top: 5px;
>img{
  
    width: 25px;
}
>li{
    margin-left: 20px;
    font-size: 14px;
    font-weight:bolder;
    
}
>li a{
    text-decoration: none;
    color: #232C47;
}
`
const WrapperLogoutAccount = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding: 8px 0px 8px 0px;
>img{
    
    width: 18px;
    margin-right: 10px;
}
>a{
    text-decoration: none;
    font-size: 14px;
    color: grey;
}
`
interface IUser{
    userName: String;
    userAvatar: string;
}

export const AccountInfo: React.FC<IUser>= (props:IUser)=>{
    console.log(props.userName)
    return(
        <>
        <WrapperAccountInfo>
            <p>Account</p>
            <ul>
                <li>
                    <WrapperUserImg>
                    <img src={props.userAvatar} alt=""/>
                    </WrapperUserImg>
                    <WrapperUserInfo>
                    <span>{props.userName}</span>
                    <a href="">See profile</a>
                    </WrapperUserInfo>
                </li>
                <WrapperAccountSettings>
                <WrapperPrivacyAccount>
                <img src="/media/privacy.svg" alt=""/>
                <li><a href="#">Privacy</a></li>
                </WrapperPrivacyAccount>
                <WrapperSettingsAccount>
                <img src="/media/settings.svg" alt=""/>
                <li><a href="#">Settings</a></li>
                </WrapperSettingsAccount>
                </WrapperAccountSettings>
            </ul>
            <WrapperLogoutAccount>
                <img src="/media/logout.svg" alt=""/>
                <a href="#">Logout</a>
            </WrapperLogoutAccount>
            </WrapperAccountInfo>
      
        </>
    )
}