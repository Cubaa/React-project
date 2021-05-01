import React, {useState, useEffect} from 'react'
import useDropdown from 'react-dropdown-hook'
import styled from 'styled-components'

const WrapperDropdownInput = styled.div`

padding-top: 5px;
padding-bottom: 5px;
>input{
    
    width: 85%;
    border: .2px solid lightgrey;
    outline: none;
    padding: 8px 12px;
    color: grey;
    border-radius: 2.5px;
    
}
>input::placeholder{
  color: grey;
}
`
interface ISearcherFunction{
  searcherFunction: (e: React.ChangeEvent<HTMLInputElement>)=>any
}

export const InputDropdownMenu: React.FC<ISearcherFunction> = (props:ISearcherFunction)=>{
  
  
    return(
      <>
      <WrapperDropdownInput>
        <input onChange={(e)=>props.searcherFunction(e)} type="text" placeholder="Filter..."/>
        </WrapperDropdownInput>
      </>
    )
}