import React, {FC, useEffect} from 'react'
import {Navigation} from '../Navigation/Navigation'
import {AsideMenu} from '../AsideMenu/AsideMenu'
import styled from 'styled-components'
import {Colors} from '../../colors/colors'
import {Publications} from '../Articles/Publications/Publications'
import {Ecosystem} from '../Articles/Ecosystem/Ecosystem'
import {Entities} from '../Articles/Entities/Entities'
import {useDispatch} from 'react-redux'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {getUsers} from '../../actions/usersActions'

type GetUsers = ReturnType<typeof getUsers>
  const WrapperMainPage = styled.body`
 
 
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
export const MainPage: React.FC = ()=>{
    console.log(user.userName)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch<GetUsers>(getUsers())
    }, [])
    return(
<>
    <Router>
        <WrapperMainPage>
        <WrapperNavigation>
            <Navigation userName={user.userName}/>
         </WrapperNavigation>
         <WrapperAsideMenuArticles>
         <WrapperAsideMenu>
            <AsideMenu />
         </WrapperAsideMenu>
      
         <Switch>
                {/* <Route path='/'>
                    <Home />
                </Route> */}
                <Route exact path='/'>
                    <Publications />
                </Route> 
                <Route path='/publications'>
                    <Publications />
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