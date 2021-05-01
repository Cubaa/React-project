import React from 'react'
import styled from 'styled-components'
import {PublicationsBtn} from '../ProfileLinks/PublicationsBtn/PublicationsBtn'
import {EcosystemBtn} from '../ProfileLinks/EcosystemBtn/EcosystemBtn'
import {EntitiesBtn} from '../ProfileLinks/EntitiesBtn/EntitiesBtn'
const WrapperProfileLinks = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width: 85%;
height: 20vh;

margin: 0 auto;


`

export const ProfileLinks: React.FC = ()=>{
    return(
        <>
        <WrapperProfileLinks>
            <PublicationsBtn />
            <EcosystemBtn />
            <EntitiesBtn />
        </WrapperProfileLinks>
    </>
    )

}