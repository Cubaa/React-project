import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WrapperListView = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 33%;
height: 5vh;

cursor: pointer;
`
interface IView {
    setViewClick: () => void;
}

export const ListView: React.FC<IView> = (props)=>{
    return(
        <>
        <WrapperListView>
        <FontAwesomeIcon onClick={()=>props.setViewClick()} style={{cursor: "pointer"}} icon={['fas', 'bars']} />
        </WrapperListView>
        </>
    )
}