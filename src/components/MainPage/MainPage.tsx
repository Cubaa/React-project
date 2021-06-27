import React, {FC, useEffect, useState} from 'react'
import {Navigation} from '../Navigation/Navigation'
import {AsideMenu} from '../AsideMenu/AsideMenu'
import styled from 'styled-components'
import {Colors} from '../../colors/colors'
import {Publications} from '../Articles/Publications/Publications'
import {Ecosystem} from '../Articles/Ecosystem/Ecosystem'
import {Entities} from '../Articles/Entities/Entities'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {IState} from '../../reducers'
import {IUsersReducer} from '../../reducers/usersReducers'
import {IUsersLatestPublicationsReducer} from '../../reducers/usersLatestPublicationsReducers'
import {IUsersPhotosReducer} from '../../reducers/usersPhotosReducers'
import {Profile} from '../Profile/Profile'
import {Workspaces} from '../Workspaces/Workspaces'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import {getUsers} from '../../actions/usersActions'
import {getUsersLatestPublications} from '../../actions/usersLatestPublicationsAction'
import {getUsersPhotos} from '../../actions/usersPhotosActions'

type GetUsers = ReturnType<typeof getUsers>
type GetUsersPhotos = ReturnType<typeof getUsersPhotos>
type GetUsersLatestPublications = ReturnType<typeof getUsersLatestPublications>


  const WrapperMainPage = styled.body`
  background-color: #dee2e6;
  min-height: 300vh;
 
  `
const WrapperNavigation = styled.header`
display: flex;
align-items: center;
height:8vh;
width:100%;
display: flex;
background-color: ${Colors.white};
position: relative;
z-index: 1000;
box-shadow: 0 2px 8px -2px rgba(0,0,0,.2);
justify-content: space-between;

`


const WrapperAsideMenuArticles = styled.div`
  width: 100%;
  display: flex;

`
const WorkspacesWrapper = styled.div`

width: 75%;
min-height: 5vh;

margin: 20px auto;
`
type  WrapperAsideMenuType = {
    resizeEntities: boolean;
}


export const MainPage: React.FC = ()=>{
  
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch<GetUsers>(getUsers())
        dispatch<GetUsersPhotos>(getUsersPhotos())
        dispatch<GetUsersLatestPublications>(getUsersLatestPublications())
    }, [])
  
    
    
   const { usersList } = useSelector<IState, IUsersReducer >(globalState =>({
    ...globalState.users,
   
    
}))
    const { usersPhotosList } = useSelector<IState, IUsersPhotosReducer >(globalState =>({
    ...globalState.usersPhotosList,
   
    
}))

    const {usersLatestPublicationsList} = useSelector<IState, IUsersLatestPublicationsReducer>(globalState=>({
    ...globalState.usersLatestPublicationsList
}))



const [resizeEntities, setResizeEntities] = useState(false)

const WrapperAsideMenu = styled.aside<WrapperAsideMenuType>`
width: 20%;
height: 92vh;
background-color: #dee2e6;
padding-top: 20px;
margin: 0;
display: ${resizeEntities ? "none" : "block"};
`


 if(usersList.length===0)
    return null;

  const loggedUserData = usersList.filter((user)=>{
      if(user.username==='Bret')
        return user;
  })
   
  const userPhotoInfo = Object.values(usersPhotosList)

  const userPhoto = userPhotoInfo[0]?.avatar

const WrapperProfile = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
width: 55%;
background-color: whitesmoke;
min-height: 100vh;
margin: 20px auto 0;
`
const changeResizeEntities = (e:any)=>{
    e.preventDefault()
    setResizeEntities(!resizeEntities)
    
}

    const resize = {resizeEntities, changeResizeEntities}
  const loggedUserDataPhoto = {loggedUserData, userPhoto, usersLatestPublicationsList}
  const loggedUserProfile = {loggedUserData, userPhoto}
  
    return(
<>
    <Router>
        <WrapperMainPage>
        <WrapperNavigation>
            <Navigation {...loggedUserDataPhoto}/>
         </WrapperNavigation>
         <WrapperAsideMenuArticles>
         <WrapperAsideMenu resizeEntities={resizeEntities} >
            <AsideMenu {...loggedUserDataPhoto}/>
         </WrapperAsideMenu>
      
         <Switch>
                <Route exact path='/'>
                    <Publications {...loggedUserDataPhoto}/>
                </Route> 
                <Route path='/publications'>
                  <h1>Publications</h1>
                </Route> 
                <Route path='/ecosystem'>
                    <Ecosystem />
                </Route>
                <Route path='/entities'>
                    <Entities {...resize}/>
                </Route> 
                <Route path='/profile'>
                    <WrapperProfile>
                    <Profile {...loggedUserProfile}/>
                   </WrapperProfile>
                </Route>
                <Route path='/:name'>
                    <WorkspacesWrapper>
                        <Workspaces />
                    </WorkspacesWrapper>
                </Route>
            </Switch> 
            </WrapperAsideMenuArticles>
            </WrapperMainPage>
    </Router>    
</>
   
    )
}