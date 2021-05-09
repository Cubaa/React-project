import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {MenuPostsSettings} from './MenuPostsSettings/MenuPostsSettings'

const WrapperMenuPostsSettings = styled.div`
width: 30%;
height: 10vh;
display: flex;
justify-content: space-around;
align-items: center;
padding-right: 10px;

`

export const MenuPostedPosts: React.FC = ()=>{
    return(
        <>
            <h4>Resume your work</h4>
            <WrapperMenuPostsSettings>
                 <MenuPostsSettings />
            </WrapperMenuPostsSettings>
        </>
    )
}