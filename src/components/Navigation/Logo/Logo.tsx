import React from 'react'
import styled from 'styled-components'


const WrapperLogo = styled.div`
position:relative;
width: 7vh;
height:7vh;
margin-left: 10px;
cursor: pointer;
`
export const Logo: React.FC = ()=>{
    return(
        <>
        <WrapperLogo>
        <a href="#">
            <img src="/media/logo.png" alt="logo" style={{width:'65%', height:'65%', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}} />
        </a>
        </WrapperLogo>
        </>
    )
}