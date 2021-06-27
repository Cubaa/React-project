import React, {useState } from 'react'
import styled from 'styled-components'
import {SearchBtn} from './SearchBtn/SearchBtn'

const WrapperNavInput = styled.div`
    width: 40%; 
    display: flex;
    
    align-items: center;
    >input{
        outline: none;
       border: .1px solid lightgrey;
       border-radius: 2.5px;
       border-top-right-radius: 0px;
        width:90%;
        padding: 5px 10px;
        border-right: 0px solid white;
        font-size: 14px;
        height: 21px;
        color: grey;
    }
    >input::placeholder{
        text-align: center;
        font-size: 12px;
    }
`
export const NavInput: React.FC = ()=>{
    const [valueFromNavInput, setValueFromNavInput] = useState("")

    const inputHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
      
     setValueFromNavInput(e.target.value)
    }

    return (
      
        <>
    
        <WrapperNavInput>
            <input onChange = {(e)=>inputHandler(e)} type="text" placeholder="Search LegalCluster"/>
            <SearchBtn clusterValue = {valueFromNavInput}/>
        </WrapperNavInput>
        </>
     
    )
}