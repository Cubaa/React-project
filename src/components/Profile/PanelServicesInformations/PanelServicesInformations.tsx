import React from 'react'
import styled from 'styled-components'
import {PanelInformations} from './PanelInformations/PanelInformations'
import {ServicesProjects} from './ServicesProjects/ServicesProjects'

const LineWrapper = styled.div`
width: 100%;
height: 1px;
background-color: lightgray;
`
const PanelInformationsWrapper = styled.div`
box-sizing: border-box;
width:100%;
min-height: 20vh;



>h3{
    margin:0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    padding-top: 10px;
    box-sizing: border-box;
    color: darkblue;
}
`
const ServicesProjectsWrapper = styled.div`
width:100%;
min-height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
>h3{
    margin:0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    padding-top: 10px;
    box-sizing: border-box;
    color: darkblue;
}
>p{
    margin:0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    padding-top: 10px;
    box-sizing: border-box;
    color: darkblue;
    font-size: 18px;
    margin-bottom: 10px;
}
`

export const PanelServicesInformstions: React.FC = ()=>{
    return(
        <>
        <LineWrapper></LineWrapper>
        <PanelInformationsWrapper>
            <PanelInformations />
        </PanelInformationsWrapper>
        <ServicesProjectsWrapper>
            <ServicesProjects />
        </ServicesProjectsWrapper>
        </>
    )
}