import React from 'react'
import styled from 'styled-components'
import useDropdown from 'react-dropdown-hook';
import {DropdownMenu} from '../ArrowDownBtn/dropdownMenu/dropdownMenu'
const WrapperArrowDown = styled.div`
position:relative;
width: 7vh;
height:7vh;
margin-left: 100px;
cursor: pointer;
`
const MainWrapperDropdownMenu = styled.div`
width: 100%;
height: 20vh;
background-color: red;
`
interface IUser{
    userName: String;
}
export const ArrowDownBtn: React.FC<IUser> = (props)=>{
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    const dropdownFilter = ():void=> console.log("Klik - drowpdown filter")

    return(
        <>
     
            <div ref={wrapperRef}>
            <WrapperArrowDown>
            <a onClick = {toggleDropdown}>
                <img src="/media/arrow-down.svg" alt="arrow down" style={{width:'10px', height:'10px', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}/>
            </a>
            </WrapperArrowDown>
            {dropdownOpen && <DropdownMenu userName = {props.userName}/>}
            </div>
      
        </>
    )
}

