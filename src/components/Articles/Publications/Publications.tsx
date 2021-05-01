import React, { ReactNode } from 'react'
import styled from 'styled-components'

import {LatestPublications} from './LatestPublications/LatestPublications'


const WrapperPublications = styled.div`
box-sizing: border-box;
width: 80%;
height: 200vh;
background-color: grey
`
const WrapperLatestPublications = styled.div`
box-sizing: border-box;
    width: 90%;
    margin: 0 auto;
    height: 45vh;
    display: flex;
    background-color: yellow;
    margin-top: 40px;
`

export const Publications: React.FC= ()=>{

    return(
        <>
        <WrapperPublications>
            <WrapperLatestPublications>
                <LatestPublications />
            </WrapperLatestPublications>
        </WrapperPublications>
        </>
    )
}