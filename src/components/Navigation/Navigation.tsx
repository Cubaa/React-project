import React from 'react'
// import SearchBtn from '../Navigation/SearchBtn/SearchBtn'
// import NotificationsBtn from '../Navigation/NotificationsBtn/NotificationsBtn'
// import NavInput from '../Navigation/NavInput/NavInput'
// import HomeBtn from '../Navigation/HomeBtn/HomeBtn'
import {Logo} from '../Navigation/Logo/Logo'
import styled from 'styled-components'
import {Colors} from '../../colors/colors'
import {HomeBtn} from '../Navigation/HomeBtn/HomeBtn'
import {ArrowDownBtn} from '../Navigation/ArrowDownBtn/ArrowDownBtn'
import {NavInput} from '../Navigation/NavInput/NavInput'
import {NotificationsBtn} from '../Navigation/NotificationsBtn/NotificationsBtn'
import {ISingleUser} from '../../entities/users'
const WrappperLogoHomeBtnArrowDownBtn = styled.div`
display: flex;
width: 30%;
justify-content: flex-start;
position: relative;
`
const WrapperNotificationsBtn = styled.div`
display: flex;
align-items:center;

width: 32%;
height: 8vh;
justify-content: flex-end;
`
interface IUserData{
    loggedUserData: ISingleUser[];
    userPhoto: string;
}


export const Navigation: React.FC<IUserData> = (props)=>{
   const userName = props.loggedUserData[0].name
   const userAvatar = props.userPhoto
   
   const userInfo = {userAvatar, userName}
    
    return(
        <>
        <WrappperLogoHomeBtnArrowDownBtn>
            <Logo />
            <HomeBtn />
            <ArrowDownBtn  {...userInfo}/>
        </WrappperLogoHomeBtnArrowDownBtn>
            <NavInput />
        <WrapperNotificationsBtn>
            <NotificationsBtn />
        </WrapperNotificationsBtn>
        </>
    )
}