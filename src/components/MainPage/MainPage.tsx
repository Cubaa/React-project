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

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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
  
    
    // console.log(latestPublications)
   const { usersList } = useSelector<IState, IUsersReducer >(globalState =>({
    ...globalState.users,
   
    
}))
const { usersPhotosList } = useSelector<IState, IUsersPhotosReducer >(globalState =>({
    ...globalState.usersPhotosList,
   
    
}))

const {usersLatestPublicationsList} = useSelector<IState, IUsersLatestPublicationsReducer>(globalState=>({
    ...globalState.usersLatestPublicationsList
}))
console.log(usersLatestPublicationsList)


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
//   console.log(usersPhotosList[0]?.data.avatar.length)
  const userPhotoInfo = Object.values(usersPhotosList)

  const userPhoto = userPhotoInfo[0]?.avatar
  console.log(userPhoto)



      
  
// const userAvatar = userPhotoInfo?.map((item)=>{
//     return item.data
// })
// console.log(userAvatar)
const WrapperProfile = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
width: 40%;
background-color: whitesmoke;
height: 100vh;
margin: 20px auto 0;
`
const changeResizeEntities = (e:any)=>{
    e.preventDefault()
    setResizeEntities(!resizeEntities)
    console.log(resizeEntities)
}

    const resize = {resizeEntities, changeResizeEntities}
  const loggedUserDataPhoto = {loggedUserData, userPhoto, usersLatestPublicationsList}
  
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
                {/* <Route path='/'>
                    <Home />
                </Route> */}
                <Route exact path='/'>
                    {/* <Publications {...loggedUserDataPhoto}/> */}
                    <h1>Main</h1>
                </Route> 
                <Route path='/publications'>
                    <Publications  {...loggedUserDataPhoto} />
                </Route> 
                
                <Route path='/ecosystem'>
                    <Ecosystem />
                </Route>
                <Route path='/entities'>
                    <Entities {...resize}/>
                </Route> 
                <Route path='/profile'>
                    <WrapperProfile>
                    <Profile />
                   </WrapperProfile>
                </Route>
            </Switch> 
            </WrapperAsideMenuArticles>
            </WrapperMainPage>
    </Router>    
</>
   
    )
}