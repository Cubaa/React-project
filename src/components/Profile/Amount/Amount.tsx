import React from 'react'
import styled from 'styled-components'

const LineWrapper = styled.div`
width: 100%;
height: 1px;
background-color: lightgray;
`

const NamesAmountWrapper = styled.div`
width: 90%;
min-height: 2vh;
display: flex;
align-items: center;

justify-content: flex-start;
>span{
    width:25%;
    margin:0;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-left: 11px;
    color: darkblue;
    font-weight: bold;
    font-size: 19px;
}

`
const ValuesAmountWrapper = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
box-sizing: border-box;
justify-content: flex-start;
padding-left: 8px;
padding-bottom: 80px;
>span{
    box-sizing: border-box;
    width: 25%;

    padding: 5px;
    display: flex;
    justify-content: flex-start;
    color: darkblue;
    font-size:19px;
    padding-bottom: 0px;
}
>span:nth-of-type(4), span:nth-of-type(8), span:nth-of-type(12), span:nth-of-type(16), span:nth-of-type(20){
   padding-left: 8px;

}
`


export const Amount:React.FC = ()=>{
    return(
        <>
        <LineWrapper></LineWrapper>
        <h3>Amount of fees</h3>
        <NamesAmountWrapper>
            <span>Year</span>
            <span>Cost Center</span>
            <span>Total amount</span>
            <span>law firm</span>
        </NamesAmountWrapper>
        <ValuesAmountWrapper>
            <span>2019</span>
            <span>CS 153</span>
            <span>3 500E</span>
            <span>Clifford Chance</span>
            <span>2018</span>
            <span>CS 153</span>
            <span>9 500</span>
            <span>Linklaters</span>
            <span>2017</span>
            <span>CS 47</span>
            <span>10 500E</span>
            <span>Linklaters</span>
            <span></span>
            <span>CS 153</span>
            <span>18 500E</span>
            <span>Linklaters</span>
            <span></span>
            <span>CS 32</span>
            <span>15 500E</span>
            <span>Linklaters</span>
        </ValuesAmountWrapper>
        </>
    )
}