import React from 'react'
import styled from 'styled-components'
import {MenuLatestUpdatePostsSettings} from './MenuLatestUpdatePostsSettings/MenuLatestUpdatePostsSettings'
const WrapperMenuLatestUpdatePostsSettings = styled.div`
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
export const MenuLatestUpdatePosts: React.FC<ISearchPost> = (props)=>{
    return(
        <>
        <h4>Latest updates</h4>
            <WrapperMenuLatestUpdatePostsSettings>
                 <MenuLatestUpdatePostsSettings searchPost = {props.searchPost}/>
            </WrapperMenuLatestUpdatePostsSettings>
        </>
    )
}