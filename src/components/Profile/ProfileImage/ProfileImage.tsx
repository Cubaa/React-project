import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
border: 1px solid black;
`


export const ProfileImage: React.FC = ()=>{
    return(
        <>
        <ImageWrapper>
            <img src="" alt="" />
        </ImageWrapper>
        <a href="/profile">See Profile</a>
        </>
    )
}