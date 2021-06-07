import React, { ReactNode, useEffect } from 'react'
import styled from 'styled-components'
import {WorkspacesSlider} from './WorkspacesSlider/WorkspacesSlider'
import {LatestPublications} from './LatestPublications/LatestPublications'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {IState} from '../../../reducers'
import {IUsersLatestPublicationsReducer} from '../../../reducers/usersLatestPublicationsReducers'
import {ISingleUser} from '../../../entities/users'
import {getUsersLatestPublications} from '../../../actions/usersLatestPublicationsAction'
import { userInfo } from 'node:os'
import {PostedPostsSection} from './PostedPosts/PostedPostsSection'

const WrapperPublications = styled.div`
box-sizing: border-box;
width: 80%;
min-height: 200vh;
background-color: #dee2e6;
text-align: left;
>h4{
    margin:0;
    margin-left: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    color: #232C47;
    font-size: 18px;

}

`
const WrapperLatestPublications = styled.div`
box-sizing: border-box;
    width: 93%;
    margin-left:0;
    height: 50vh;
    display: flex;
    background-color: white;
    margin-top: 20px;
    box-shadow: 0 1px 6px -2px rgba(0,0,0,.2), 0 1px 6px -2px rgba(0,0,0,.2);

   
`
const WrapperWorkspacesSlider = styled.div`
width: 93%;
height: 35vh;
`

const WrapperPostedPostsSection = styled.div`
box-sizing: border-box;
width: 93%;
min-height: 80vh;
display: flex;
margin-top: 20px;
margin-bottom: 20px;
flex-direction: column;

`
interface IUser{
    loggedUserData: ISingleUser[];
    userPhoto: string;
    usersLatestPublicationsList: any
}



export const Publications: React.FC<IUser>= (props)=>{
   
    // console.log(usersLatestPublicationsList.length)
  
    const usersPublications = props.usersLatestPublicationsList
  const b = props.usersLatestPublicationsList
 
    const yoursPosts = usersPublications.filter((item:any)=>{
        if(item.userId===props.loggedUserData[0].id)
            return item;
    })
    console.log(yoursPosts)
    console.log(props.usersLatestPublicationsList)
    const loggedUser = props.loggedUserData
    const userAvatar = props.userPhoto
    const userInfoData = {loggedUser, yoursPosts, userAvatar}
    const postedPodts = {loggedUser, yoursPosts, usersPublications, b}
    return(
        <>
        <WrapperPublications>
            <WrapperLatestPublications>
                <LatestPublications {...userInfoData}/>
            </WrapperLatestPublications>
            <h4>Workspaces</h4>
            <WrapperWorkspacesSlider>
               <WorkspacesSlider />
            </WrapperWorkspacesSlider>
            <WrapperPostedPostsSection>
                <PostedPostsSection {...postedPodts}/>
            </WrapperPostedPostsSection>

        </WrapperPublications>
        </>
    )
}