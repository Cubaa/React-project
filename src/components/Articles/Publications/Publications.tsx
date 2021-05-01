import React, { ReactNode } from 'react'
import styled from 'styled-components'

import {LatestPublications} from './LatestPublications/LatestPublications'


const WrapperPublications = styled.div`
box-sizing: border-box;
width: 80%;
height: 200vh;
background-color: #dee2e6;

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

interface IlatestPublications{
    userId: number;
    publicationId: number;
    userName:string;
    userImage: string;
    content: string;
    publicationImage:string;
    date: object, 
}
interface IlatestPublicationsData{
   latestPublications: IlatestPublications[];
   
}

export const Publications: React.FC<IlatestPublicationsData>= (props)=>{
    console.log(props)
    return(
        <>
        <WrapperPublications>
            <WrapperLatestPublications>
                <LatestPublications latestPublicationsData = {props.latestPublications}/>
            </WrapperLatestPublications>
        </WrapperPublications>
        </>
    )
}