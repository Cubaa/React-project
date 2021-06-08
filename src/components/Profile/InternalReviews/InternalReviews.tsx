import React from 'react'
import styled from 'styled-components'

const LineWrapper = styled.div`
width: 100%;
height: 1px;
background-color: lightgray;
`
const WrapperTabLine = styled.div`
display: flex;
justify-content: flex-end;
>div{
width: 99%;
height: 1px;
background-color: lightgrey;
text-align: right;
}
`
const NamesInterviewsWrapper = styled.div`
width: 100%;
min-height: 2vh;
display: flex;
align-items: center;

justify-content: flex-start;
>span{
    width: 16.66%;
    margin:0;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-left: 11px;
    color: darkblue;
    font-weight: bold;
}

`
const ValuesInterviewsWrapper = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
box-sizing: border-box;
justify-content: flex-start;
padding-left: 8px;
>span{
    box-sizing: border-box;
    width: 16.66%;

    padding: 5px;
    display: flex;
    justify-content: flex-start;
    color: darkblue;
}

`

const MoreInterviewsWrapper = styled.div`
width: 100%;
min-height: 2vh;
display: flex;
justify-content: flex-start;
align-items: center;
box-sizing: border-box;
padding: 14px 10px 20px 8px;
>a{
    text-decoration: none;
    font-size: 20px;
    color: darkblue;
    font-weight: bold;
}
`

export const InternalReviews: React.FC = ()=>{
    return(
        <>
        <LineWrapper></LineWrapper>
        <h3>Internal Reviews</h3>
        <NamesInterviewsWrapper>
            <span>Name</span>
            <span>Entity</span>
            <span>Location</span>
            <span>Expertise</span>
            <span>Date</span>
            <span></span>
        </NamesInterviewsWrapper>
        <WrapperTabLine>
        <div></div>
        </WrapperTabLine>
        <ValuesInterviewsWrapper>
            <span>Operation Ti...</span>
            <span>Renault Co...</span>
            <span>France</span>
            <span>#Tax</span>
            <span>20/01/2018</span>
            <span></span>
            <span>Op. Prometh...</span>
            <span>Reanult HQ</span>
            <span>Usa</span>
            <span>#M&A</span>
            <span>18/02/2019</span>
            <span></span>
            <span>Op. Latandre</span>
            <span>Renault Br...</span>
            <span>Italia</span>
            <span>#Social</span>
            <span>18/02/2019</span>
            <span></span>
        </ValuesInterviewsWrapper>
        <MoreInterviewsWrapper>
            <a href="#">See more Reviews</a>
        </MoreInterviewsWrapper>
        </>
    )
}