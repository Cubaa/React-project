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
const NamesProposalWrapper = styled.div`
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
const ValuesProposalWrapper = styled.div`
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
>span:nth-of-type(6), span:nth-of-type(12), span:nth-of-type(18){
   padding-left: 8px;

}
`

const MoreProposalsWrapper = styled.div`
width: 100%;
min-height: 2vh;
display: flex;
justify-content: flex-end;
align-items: center;
box-sizing: border-box;
padding: 5px 10px 15px 5px;
>a{
    text-decoration: none;
    font-size: 20px;
    color: skyblue;
}
`

export const Proposal: React.FC = ()=>{
    return(
        <>
        <LineWrapper></LineWrapper>
        <h3>Proposal</h3>
        <NamesProposalWrapper>
            <span>Name</span>
            <span>Entity</span>
            <span>Location</span>
            <span>Expertise</span>
            <span>Date</span>
            <span>Firm</span>
        </NamesProposalWrapper>
        <WrapperTabLine>
        <div></div>
        </WrapperTabLine>
        <ValuesProposalWrapper>
            <span>Operation Ti...</span>
            <span>Renault Co...</span>
            <span>France</span>
            <span>#Tax</span>
            <span>20/01/2018</span>
            <span>Racine</span>
            <span>Op. Prometh...</span>
            <span>Reanult HQ</span>
            <span>Usa</span>
            <span>#M&A</span>
            <span>18/02/2019</span>
            <span>Clifford Chance</span>
            <span>Op. Latandre</span>
            <span>Renault Br...</span>
            <span>Italia</span>
            <span>#Social</span>
            <span>18/02/2019</span>
            <span>SVZ</span>
        </ValuesProposalWrapper>
        <MoreProposalsWrapper>
            <a href="#">See more proposals</a>
        </MoreProposalsWrapper>
        </>
    )
}