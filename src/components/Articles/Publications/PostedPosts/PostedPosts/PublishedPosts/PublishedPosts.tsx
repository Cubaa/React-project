import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {ISingleLatestPublication} from '../../../../../../entities/usersLatestPosts'
import {ISingleUser} from '../../../../../../entities/users'

interface IPostedPosts{
    loggedUser: ISingleUser[];
    yoursPosts: ISingleLatestPublication[];
    allPosts: ISingleLatestPublication[][];
}
export const PublishedPosts: React.FC<IPostedPosts> = (props)=>{
    console.log(props.allPosts)
useEffect(()=>{
    console.log(props.allPosts)
},[props.allPosts])
    
    return(
        <>
        
        </>
    )
}