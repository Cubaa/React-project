import React, { ReactNode } from 'react'
import styled from 'styled-components'



const WrapperEntities = styled.div`
width: 80%;
height: 200vh;
background-color: blue
`

export const Entities: React.FC= ()=>{

    return(
        <>
        <WrapperEntities>
            <h1>Entities</h1>
        </WrapperEntities>
        </>
    )
}