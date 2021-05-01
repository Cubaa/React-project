import React from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const WrapperPlatformWorkspacesLists = styled.div`
display: flex;
box-sizing: border-box;
flex-direction: column;
align-items: center;
width: 100%;
height: 56vh;

justify-center: flex-start;
overflow-y: scroll;
`
const WrapperPlatformList = styled.div`
position: relative;
box-sizing: border-box;
width: 100%;

height: auto;
display: flex;
flex-direction: column;

>p{
    box-sizing: border-box;
    margin:0;
    text-align: left;
    padding-left: 8px;
    width:100%;
    background-color: white;
    font-size: 12px;
    font-weight: bold;
    color: grey;
}
`
const WrapperWorkspacesList = styled.div`
position: relative;
box-sizing: border-box;
width: 100%;
margin-top: 10px;
height: auto;
display: flex;
flex-direction: column;

>p{
    box-sizing: border-box;
    margin:0;
    text-align: left;
    padding-left: 8px;
    width:100%;
    background-color: white;
    font-size: 12px;
    font-weight: bold;
    color: grey;
}
`
const PlatformList = styled.ul`
diplay: flex;
flex-direction: row;
align-items: center;
padding:0;
margin: 0;
width: 100%;
opacity: 1;
list-style:none;
box-sizing: border-box;

>li{
    
    display: flex;
    flex-direction: row; 
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0px 1px 8px;
    box-sizing: border-box;
    width: 100%;
    background-color: white;
}
>li img{
    width: 100%;
    
}
>li a{
    text-decoration: none;
    font-weight:bolder;
    color: #232C47;
    font-size: 14px;
}
`
const IconImageWrapper = styled.div`
width: 22px;
height: 22px;
padding-right: 14px;

`
const WorkspacesList = styled.ul`
diplay: flex;
flex-direction: row;
align-items: center;
padding:0;
margin: 0;
width: 100%;
opacity: 1;
list-style:none;
box-sizing: border-box;

>li{
    
    display: flex;
    flex-direction: row; 
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0px 1px 8px;
    box-sizing: border-box;
    width: 100%;
    background-color: white;
}
>li img{
    width: 100%;
    
}
>li a{
    text-decoration: none;
    font-weight:bolder;
    color: #232C47;
    font-size: 14px;
}
`

interface ICategoriesItem{
    label: string; 
    iconImg: string; 
    categoryName: string;
}

interface ICategories{
    dropdownMenuElements:ICategoriesItem[]
}

export const PlatformWorkspacesLists: React.FC<ICategories> = (props: ICategories)=>{
    console.log(props)
    
    const platformListitems = props.dropdownMenuElements.map((item: any, index: number)=>{
        if(item.label==="Platform"){
        return(
        <li key={index.toString()}>
        <IconImageWrapper>
        <img src={item.iconImg} alt="icon"/>
        </IconImageWrapper>
        <a href="#">
            {item.categoryName}
        </a>
    </li>
        )
        }
    })
    const workspacesListitems = props.dropdownMenuElements.map((item: any, index: number)=>{
        if(item.label==="Workspaces"){
        return(
        <li key={index.toString()}>
        <IconImageWrapper>
        <img src={item.iconImg} alt="icon"/>
        </IconImageWrapper>
        <a href="#">
            {item.categoryName}
        </a>
    </li>
        )
        }
    })
    // if(props.platformCategory.length!==0)
    //     console.log(platformListitems)
    return(
        <>
        <WrapperPlatformWorkspacesLists>
            <WrapperPlatformList>
                <p>Platform</p>
                <PlatformList>
                   {platformListitems}
                </PlatformList>
            </WrapperPlatformList>
            <WrapperWorkspacesList>
                <p>Workspaces</p>
            <WorkspacesList>
                {workspacesListitems} 
            </WorkspacesList>
            </WrapperWorkspacesList>
         </WrapperPlatformWorkspacesLists>
        </>
    )
}