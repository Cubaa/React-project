import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WrapperMosaicView = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 67%;
height: 5vh;
background-color: #DEE2E6;
border-radius: 1px;
>span{
    font-size: 10px;
    font-weight: bold;
    margin-left: 5px;
}
`
interface IView {
    setViewClick: () => void;
}
export const MosaicView: React.FC<IView> = (props)=>{
    
    return(
        <>
        <WrapperMosaicView>
            <FontAwesomeIcon onClick={()=>props.setViewClick()} style={{cursor: "pointer"}} icon={['fas', 'th']} />
            <span>Mosaic</span>
        </WrapperMosaicView>
        </>
    )
}