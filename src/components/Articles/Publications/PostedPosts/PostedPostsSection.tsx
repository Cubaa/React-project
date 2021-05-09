import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components'
import {MenuPostedPosts} from './MenuPostedPosts/MenuPostedPosts'
import {PostedPosts} from './PostedPosts/PostedPosts'
import {ISingleLatestPublication} from '../../../../entities/usersLatestPosts'
import {ISingleUser} from '../../../../entities/users'
const WrapperMenuPostedPosts = styled.div`
box-sizing: border-box;
width: 100%;
height: 10vh;
display:flex;
justify-content: space-between;
align-items: center;
>h4{
    padding-left: 20px;
    color: #232C47;
}
`
const WrapperPostedPosts = styled.div`
box-sizing: border-box;
width: 100%;
height:100vh;
background-color: darkgrey;


`

interface IPostedPosts{
    loggedUser: ISingleUser[];
    yoursPosts: ISingleLatestPublication[];
    usersLatestPublicationsList: ISingleLatestPublication[];
}
export const PostedPostsSection: React.FC<IPostedPosts> = (props)=>{
    console.log(props)
    const loggedUser = props.loggedUser
    const yoursPosts = props.yoursPosts
    const usersLatestPublicationsList = props.usersLatestPublicationsList
    const postedPodts = {loggedUser, yoursPosts, usersLatestPublicationsList}

    return(
        <>
            <WrapperMenuPostedPosts>
                <MenuPostedPosts />
            </WrapperMenuPostedPosts>
            <WrapperPostedPosts>
                <PostedPosts {...postedPodts}/>
            </WrapperPostedPosts>
        </>
    )
}