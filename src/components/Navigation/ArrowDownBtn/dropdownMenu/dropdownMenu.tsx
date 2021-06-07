import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {InputDropdownMenu} from '../dropdownMenu/InputDropdownMenu/InputDropdownMenu'
import {AccountInfo} from './AccountInfo/AccountInfo'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {PlatformWorkspacesLists} from '../dropdownMenu/PlatformWorkspacesLists/PlatformWorkspacesLists'
const WrapperDropdownMenu = styled.div`
position:absolute;
box-sizing:border-box;
display: flex;
flex-direction: column;
justify-content: flex-start;;
top: 106%;
left:15%;
width: 68%;
height: 89vh;
border: .2px solid black;
background-color: white;
`
const HelperStyleDiv = styled.div`
box-sizing:border-box;
position: absolute;
top:-9.2%;
left:-0.3%;
width: 100.5%;
height: 8vh;
background-color:white;
opacity: 1;
z-index: -1;

border-top-left-radius: 4px;
border-top-right-radius: 4px;   
border-left: .2px solid black;
border-right: .2px solid black;
border-top: .2px solid black;
`
interface IUser{
    userName: String;
    userAvatar: string;
}

export const DropdownMenu: React.FC<IUser> = (props)=>{
    const platformCategory= [{
        label: "Platform",
        iconImg: "/media/house2.svg",
        categoryName: "Home",
        
    },
    {
        label: "Platform",
        iconImg: "/media/publications.svg",
        categoryName: "Publications",
     
    },
    {
        label: "Platform",
        iconImg: "/media/people.svg",
        categoryName: "People",
       
    },
    {
        label: "Platform",
        iconImg: "/media/entities2.png",
        categoryName: "Entities",
        
    },
    {
        label: "Platform",
        iconImg: "/media/administration.svg",
        categoryName: "Administration",
       
    },
    ]

    const workspacesCategory= [{
        label: "Workspaces",
        iconImg: "/media/publications.svg",
        categoryName: "Client contract",
       
    },
    {
        label: "Workspaces",
        iconImg: "/media/publications.svg",
        categoryName: "Supplier Contract",
        
    },
    {
        label: "Workspaces",
        iconImg: "/media/entities2.svg",
        categoryName: "Corporate",
      
    },
    {
        label: "Workspaces",
        iconImg: "/media/publications.png",
        categoryName: "Group Norms",
     
    },
    {
        label: "Workspaces",
        iconImg: "/media/publications.svg",
        categoryName: "Real estate contracts",
     
    },
    ]
   
  
    
    const platformsWorkspacesCategories = [...platformCategory, ...workspacesCategory]
const [searchMenuelements, setSearchMenuElements] = useState([...platformsWorkspacesCategories]);
    const inputDropdownMenuHandler = (e:React.ChangeEvent<HTMLInputElement> )=>{
       
      const searchMenuelements:any = platformsWorkspacesCategories.filter((item:any, index, platformCategory)=>{
        
          if(item.categoryName.includes(e.target.value.trim()) || item.categoryName.toLocaleLowerCase().includes(e.target.value.trim()) || item.categoryName.toLocaleUpperCase().includes(e.target.value.trim())) 
            return item;

        })
        setSearchMenuElements(searchMenuelements)
        console.log(searchMenuelements)
     
    }
    const userName = props.userName
    const userAvatar = props.userAvatar
    const userInfo = {userName, userAvatar}
    
    return(
        
       <>
        <WrapperDropdownMenu>
            <HelperStyleDiv>
            </HelperStyleDiv>
            <div>
                <InputDropdownMenu searcherFunction= {inputDropdownMenuHandler}/>
                <PlatformWorkspacesLists dropdownMenuElements = {searchMenuelements} />
                <AccountInfo {...userInfo}/>
                {/* <PlatformList />
                <WorkspacesList />
                <AccountList /> */}
            </div>
        </WrapperDropdownMenu>
       
       </>
    )
}