import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

interface IPosts{
    data: any[]
}
export const  PaginationPosts: React.FC<IPosts> = (props)=>{
    console.log(props.data)
    return(
        <>
        </>
    )
}