import React, { ReactNode } from 'react'
import styled from 'styled-components'



const WrapperEcosystem = styled.div`
width: 80%;
height: 200vh;
background-color: grey
`

export const Ecosystem: React.FC= ()=>{

    return(
        <>
        <WrapperEcosystem>
            <h1>Ecosystem</h1>
        </WrapperEcosystem>
        </>
    )
}