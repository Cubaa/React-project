import React, { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import {MosaicView} from './MosaicView/MosaicView'
import {ListView} from './ListView/ListView'
import {EntitiesMenuSettings} from './EntitiesMenuSettings/EntitiesMenuSettings'
import {MixSettings} from './MixSettings/MixSettings'
import {EntitiesContent} from './EntitiesContent/EntitiesContent'



const WrapperFirstSettings = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:100%;
height: 5vh;


`

const WrapperChangeView = styled.div`
display: flex;
width: 10%;
height: 5vh;
border: 1px solid grey;
margin-right: 20px;

`
const WrapperName = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 10%;
height: 5vh;

>div{
    
    display: flex;
    justify-content: center;
    align-items: center;
   
    width: 5vh;
    height: 5vh;
}
>div>img{
    width: 40%;
    height:40%;
}
`

const WrapperSecondSettings = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 5vh;
/* background-color: yellow; */
margin-top: 1px;
`
const WrapperMixSetting = styled.div`
width: 30%;
height: 5vh;
/* background-color: red; */
display: flex;
padding-left: 10px;
margin-top: 20px;

`
const WrapperMenuSettings = styled.div`
width: 30%;
height: 5vh;
display: flex;
justify-content: space-around;
align-items: center;
padding-right: 10px;
/* background-color: pink; */
margin-top: 20px;
`


interface IResizeEntities{
    resizeEntities: boolean;
    changeResizeEntities: (e: any) => void;
}

type  WrapperEntitiesCardType = {
    view: string;
}
type  WrapperAsideMenuType = {
    resizeEntities: boolean;
}


export const Entities: React.FC<IResizeEntities>= (props)=>{
    const WrapperEntities = styled.div`
    display: flex;
    width: ${props.resizeEntities ? "100%" : "80%"};
    height: 200vh;
    background-color: lightgrey;
    margin-top: 20px;
    margin-right: 20px;
    flex-direction: column;
    margin: ${props.resizeEntities ? "20px auto" : "20px 0px 0px 20px"};
    `
    const [view, setView] = useState("M")
    const setMosaicViewClick = ()=>{
        setView("M")
        
    }
    const setListiewClick = ()=>{
        setView("L")
    }

    const WrappierEntitiesContent = styled.div<WrapperEntitiesCardType>`
    box-sizing: border-box;
    width: 100%;
    height: 150vh;
    margin-top: 40px;
    
    display: flex;
    flex-wrap: ${view==="M" ? "wrap" : "nowrap"};
    flex-direction: ${view==="M" ? "row" : "column"};
    `
const entitiesContent = {view}
    return(
        <>
        <WrapperEntities>
        <WrapperFirstSettings>
            <WrapperName>
            <h4>Entities</h4>
            <div>
                <img src="/media/cog.svg" alt="cog" />
            </div>
            </WrapperName>
            <WrapperChangeView>
                <MosaicView setViewClick = {setMosaicViewClick} />
                <ListView setViewClick = {setListiewClick} />
            </WrapperChangeView>
         </WrapperFirstSettings>
         <WrapperSecondSettings>
             <WrapperMixSetting>
                <MixSettings changeResizeEntities={props.changeResizeEntities}/>
             </WrapperMixSetting>
             <WrapperMenuSettings>
                 <EntitiesMenuSettings/>
            </WrapperMenuSettings>
         </WrapperSecondSettings>
         <WrappierEntitiesContent view={view}>
             <EntitiesContent {...entitiesContent}/>
         </WrappierEntitiesContent>
        </WrapperEntities>
        </>
    )
}