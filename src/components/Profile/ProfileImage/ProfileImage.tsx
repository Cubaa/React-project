import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;

>img{
    width:100%;
    height:100%;
    object-fit: cover;
    border-radius: 50%;
}
`
interface IUserImage{
    image: string;
}

export const ProfileImage: React.FC<IUserImage> = (props)=>{
    return(
        <>
        <ImageWrapper>
            <img src={props.image} alt="userImage" />
        </ImageWrapper>
        <a href="/profile">See Profile</a>
        </>
    )
}