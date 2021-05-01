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

const WrappperLogoHomeBtnArrowDownBtn = styled.div`
display: flex;
width: 30%;
justify-content: flex-start;
position: relative;
`
const WrapperNotificationsBtn = styled.div`
display: flex;
alignt-items:center;

width: 32%;
height: 8vh;
justify-content: flex-end;
`
interface IUser{
    userName: String;
}
export const Navigation: React.FC<IUser> = (props)=>{
    return(
        <>
        <WrappperLogoHomeBtnArrowDownBtn>
            <Logo />
            <HomeBtn />
            <ArrowDownBtn userName = {props.userName}/>
        </WrappperLogoHomeBtnArrowDownBtn>
            <NavInput />
        <WrapperNotificationsBtn>
            <NotificationsBtn />
        </WrapperNotificationsBtn>
        </>
    )
}