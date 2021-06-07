import React, {useState} from 'react'
import styled from 'styled-components'
import {FilePanel} from './FilePanel/FilePanel'
const HourlyWrapper = styled.div`
box-sizing: border-box;
width:100%;

display: flex;
margin:0;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5px 5px 5px 10px;
margin-top: 10px;
margin-bottom: 10px;
>span:nth-of-type(1){
    margin-bottom: 5px;
    color: grey;
    font-size:17px;
}
>span:nth-of-type(2){
    color: darkblue;
    font-size: 20px;
    
}
`
const TermsConditionsWrapper = styled.div`
box-sizing: border-box;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5px 10px 5px 10px;
>span{
margin:0;
    color: grey;
    font-size:17px;
    margin-bottom: 6px;
}
>p{
    margin:0;
    color: darkblue;
    font-size: 20px;
    margin-bottom: 8px;
}

`
const SelectFilesWrapper = styled.div`
display: flex;
justify-content: center;
width:100%;
>div{
    box-sizing: border-box;
    margin:0;
   width: 99%;
    background-color: #b1b0e4;
    display: flex;
    padding: 5px;
    border-radius: 2px;
}
`


export const PanelInformations:React.FC = ()=>{
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (e:any) => {
		setSelectedFile(e.target.files[0]);
		setIsFilePicked(true);
	};
   const fileHandler = {changeHandler, isFilePicked, selectedFile}

    return(
        <>
        <h3>Panel Informations</h3>
        <HourlyWrapper>
            <span>Hourly fee</span>
            <span>610E/hour (Negociated)</span>
        </HourlyWrapper>
        <TermsConditionsWrapper>
            <span>Terms&Conditions</span>
            <p>Monthly 10kE retainer - see with Jeanny Smith</p>
            <SelectFilesWrapper>
                <FilePanel {...fileHandler} />
            </SelectFilesWrapper>
        </TermsConditionsWrapper>
        </>
    )
}