import React, {FC, useEffect} from 'react'
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
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {getUsers} from '../../actions/usersActions'

type GetUsers = ReturnType<typeof getUsers>
  const WrapperMainPage = styled.body`
  background-color: #dee2e6;
 
  `
const WrapperNavigation = styled.header`
display: flex;
align-items: center;WE
height:8vh;
width:100%;
display: flex;
background-color: ${Colors.white};
position: relative;
z-index: 1000;
box-shadow: 0 2px 8px -2px rgba(0,0,0,.2);
justify-content: space-between;

`
const WrapperAsideMenu = styled.aside`
width: 20%;
height: 92vh;
background-color: #dee2e6;
padding-top: 20px;
margin: 0;
`

const WrapperAsideMenuArticles = styled.div`
  width: 100%;
  display: flex;

`
const user = {
    userName: "Jakub Ziemiański"
}

const latestPublications = [
    {
        userId: 1,
        publicationId: 1,
        userName: "John Doe",
        userImage: "/media/scott-graham-OQMZwNd3ThU-unsplash (1).jpg",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequatur unde quia voluptates.",
        publicationImage: "/media/scott-graham-OQMZwNd3ThU-unsplash (1).jpg",
        date: {
            day: 7,
            month: 2,
            year: 2020
        }, 
    },
    {
        userId: 1,
        publicationId: 1,
        userName: "John Doe",
        userImage: "/media/scott-graham-OQMZwNd3ThU-unsplash (1).jpg",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequatur unde quia voluptates.",
        publicationImage: "/media/scott-graham-OQMZwNd3ThU-unsplash (1).jpg",
        date: {
            day: 7,
            month: 2,
            year: 2020
        }, 
    },
    {
        userId: 1,
        publicationId: 1,
        userName: "John Doe",
        userImage: "/media/scott-graham-OQMZwNd3ThU-unsplash (1).jpg",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequatur unde quia voluptates.",
        publicationImage: "/media/scott-graham-OQMZwNd3ThU-unsplash (1).jpg",
        date: {
            day: 7,
            month: 1,
            year: 2020
        }, 
    },
    {
        userId: 3,
        publicationId: 1,
        userName: "John Doe",
        userImage: "/media/scott-graham-OQMZwNd3ThU-unsplash (1).jpg",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequatur unde quia voluptates.",
        publicationImage: "/media/scott-graham-OQMZwNd3ThU-unsplash (1).jpg",
        date: {
            day: 7,
            month: 2,
            year: 2020
        }, 
    },
]
export const MainPage: React.FC = ()=>{
    console.log(user.userName)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch<GetUsers>(getUsers())
    }, [])
    // console.log(latestPublications)
   const { usersList } = useSelector<IState, IUsersReducer>(globalState =>globalState.users)
   console.log(usersList)
   if(usersList.length===0)
    return null;
  const loggedUserData = usersList.filter((user)=>{
      if(user.username==='Antonette')
        return user;
  })
  console.log(loggedUserData)
  console.log(loggedUserData[0])
    return(
<>
    <Router>
      {console.log({usersList})}
        <WrapperMainPage>
        <WrapperNavigation>
            <Navigation loggedUserData={loggedUserData}/>
         </WrapperNavigation>
         <WrapperAsideMenuArticles>
         <WrapperAsideMenu>
            <AsideMenu loggedUserData={loggedUserData}/>
         </WrapperAsideMenu>
      
         <Switch>
                {/* <Route path='/'>
                    <Home />
                </Route> */}
                <Route exact path='/'>
                    {/* <Publications /> */}
                    <h1>Main Page</h1>
                </Route> 
                <Route path='/publications'>
                    <Publications  latestPublications = {latestPublications} />
                </Route> 
                
                <Route path='/ecosystem'>
                    <Ecosystem />
                </Route>
                <Route path='/entities'>
                    <Entities />
                </Route> 
            </Switch> 
            </WrapperAsideMenuArticles>
            </WrapperMainPage>
    </Router>    
</>
   
    )
}