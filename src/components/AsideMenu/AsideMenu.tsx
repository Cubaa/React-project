import React from 'react';
import {ProfileLinks} from './ProfileLinks/ProfileLinks'
import {ProfileMenu} from './ProfileMenu/ProfileMenu'
import styled from 'styled-components'
import {ISingleUser} from '../../entities/users'
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
interface IUser{
    loggedUserData: ISingleUser[];
    userPhoto: string;
}
interface IUserData{
    name: string;
    companyName: string;
    catchPhrase: string;
}
export const AsideMenu: React.FC<IUser> = (props) =>{
    console.log(props?.loggedUserData)
    console.log(props.loggedUserData[0].name)
    const userData:IUserData = {
        name: props.loggedUserData[0].name, 
        companyName: props.loggedUserData[0].company.name,
        catchPhrase: props.loggedUserData[0].company.catchPhrase
    }
const userAvatar = props.userPhoto
    const userInfo = {userData, userAvatar}
    return(
        <>
         
                <WrapperProfileMenu>
                    <ProfileMenu {...userInfo}/>
                </WrapperProfileMenu>
                    <ProfileLinks/>
          
        </>
    )
}