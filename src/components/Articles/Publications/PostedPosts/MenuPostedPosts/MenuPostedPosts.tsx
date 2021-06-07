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
interface ISearchPost{
    searchPost: (e: any) => void
}
export const MenuPostedPosts: React.FC<ISearchPost> = (props)=>{
    return(
        <>
            <h4>Resume your work</h4>
            <WrapperMenuPostsSettings>
                 <MenuPostsSettings searchPost = {props.searchPost}/>
            </WrapperMenuPostsSettings>
        </>
    )
}