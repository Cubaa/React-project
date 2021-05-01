import React from 'react'
import styled from 'styled-components'
interface ISearchBtn{
    clusterValue: string;
}
const WrapperSearchBtn = styled.div`
border: .1px solid lightgrey;
width: 10%;

padding: 7px 0 3px 0;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
export const SearchBtn: React.FC<ISearchBtn> = (props)=>{
    const searchCluster = (props: ISearchBtn)=>{
        console.log(props.clusterValue)
    }
    return(
        <WrapperSearchBtn>
        <a onClick={()=>searchCluster(props)}>
            <img src="/media/search.svg" alt="" style={{width: '90%', height: '90%'}}/>
        </a> 
        </WrapperSearchBtn>     
    )
}