import React from 'react';
import {ProfileLinks} from './ProfileLinks/ProfileLinks'
import {ProfileMenu} from './ProfileMenu/ProfileMenu'
import styled from 'styled-components'

const WrapperProfileMenu = styled.div`
    width: 85%;
    height: 39vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    box-shadow: 0 1px 6px -2px rgba(0,0,0,.2), 0 1px 6px -2px rgba(0,0,0,.2);
`


export const AsideMenu: React.FC = () =>{
    
    return(
        <>
         
                <WrapperProfileMenu>
                    <ProfileMenu />
                </WrapperProfileMenu>
                    <ProfileLinks/>
          
        </>
    )
}