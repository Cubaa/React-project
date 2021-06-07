import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const IconWrapper = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;


`

const ExpertiseWrapper = styled.div`
margin:0;
display: flex;
flex-direction: column;
align-items: flex-start;
>span{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 5px;
}
>p
{
    padding: 4px 8px;
    background-color: #a4a4c7;
    border-radius: 2px;
    color: white;
    margin-right: 5px;
    margin-left:5px;
}
`


const SpecialtiesWrapper = styled.div`
margin:0;
display: flex;
flex-direction: column;
align-items: flex-start;
>span{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 5px;
}
>div{
    display: flex;
}
>div p
{
    padding: 4px 8px;
    background-color: #a4a4c7;
    border-radius: 2px;
    color: white;
    margin-right: 5px;
    margin-left:5px;
}

`
const AdmissionWrapper = styled.div`
margin:0;
display: flex;
flex-direction: column;
align-items: flex-start;
>span{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 5px;
}
>div{
    display: flex;
    
    
}
>div p
{
    padding: 4px 8px;
    background-color: #a4a4c7;
    border-radius: 2px;
    color: white;
    margin-right: 5px;
    margin-left:5px;
}

`

const CountiesWrapper = styled.div`
margin:0;
display: flex;
flex-direction: column;
align-items: flex-start;
>span{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 5px;
}
>p
{
    padding: 4px 8px;
    background-color: #a4a4c7;
    border-radius: 2px;
    color: white;
    margin-right: 5px;
    margin-left:5px;
}
`

const SelectWrapper = styled.div`
background-color: red;
display: flex;
margin-top: 15px;
border-radius:2px;
margin-right: 5px;
margin-left:5px;
margin-bottom: 10px;
>select{
    padding: 4px 15px;
    background-color: #a4a4c7;
    border-radius:2px;
    border: none;
    outline: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
  
}

`

interface IEdit {
        handleEditData2: (selectedForm: any) => void;
        edit2: boolean;
        selectValue: {
            slct1: string;
            slct2: string;
            slct3: string;
            slct4: string;
            slct5: string;
            slct6: string;
        };
}

export const SelectedInfo:React.FC<IEdit> = (props)=>{

const choosenInfo = []
const editInfo =[]

for(let i=0; i<1; i++){
    if(!props.edit2){
        choosenInfo.length=0;
        choosenInfo.push(
            <>
                <ExpertiseWrapper>
                <span>Expertise</span>
                <p>{props.selectValue.slct1}</p>
                </ExpertiseWrapper>
                <SpecialtiesWrapper>
                <span>Specialties</span>
                <div>
                <p>{props.selectValue.slct2}</p>
                <p>{props.selectValue.slct3}</p>
                </div>
                </SpecialtiesWrapper>
                <AdmissionWrapper>
                <span>Admission to practice law</span>
                <div>
                <p>{props.selectValue.slct4}</p>
                <p>{props.selectValue.slct5}</p>
                </div>
                </AdmissionWrapper>
                <CountiesWrapper>
                <span>Counties</span>
                <p>{props.selectValue.slct6}</p>
                </CountiesWrapper>
    
                </>
        )
    }else{
        choosenInfo.length=0;
    choosenInfo.push(
        <>
            <form className="selectedForm">
            
            <ExpertiseWrapper>
            <span>Expertise</span>
            <SelectWrapper>
                <select name="slct1" id="slct1">
                    <option value="Mergers and  qcquiston">Mergers and  qcquiston</option>
                    <option value="Mergers and  qcquiston2">Mergers and  qcquiston2</option>
                    <option value="Mergers and  qcquiston3">Mergers and  qcquiston3</option>
                    <option value="Mergers and  qcquiston4">Mergers and  qcquiston4</option>
                </select>
            </SelectWrapper>
            </ExpertiseWrapper>
            <SpecialtiesWrapper>
            <span>Specialties</span>
            <div>
            <SelectWrapper>
                <select name="slct2" id="slct2">
                    <option value="Cross border operation">Cross border operation</option>
                    <option value="Cross border operation2">Cross border operation2</option>
                    <option value="Cross border operation3">Cross border operation3</option>
                    <option value="Cross border operation4">Cross border operation4</option>
                </select>
            </SelectWrapper>
            <SelectWrapper>
                <select name="slct3" id="slct3">
                    <option value="Transaction over 500ME/S">Transaction over 500ME/S</option>
                    <option value="Transaction over 500ME/S2">Transaction over 500ME/S2</option>
                    <option value="Transaction over 500ME/S3">Transaction over 500ME/S3</option>
                    <option value="Transaction over 500ME/S4">Transaction over 500ME/S4</option>
                </select>
            </SelectWrapper>
            </div>
            </SpecialtiesWrapper>
            <AdmissionWrapper>
            <span>Admission to practice law</span>
            <div>
            <SelectWrapper>
                <select name="slct4" id="slct4">
                    <option value="Paris bar association">Paris bar association</option>
                    <option value="Paris bar association2">Paris bar association2</option>
                    <option value="Paris bar association3">Paris bar association3</option>
                    <option value="Paris bar association4">Paris bar association4</option>
                </select>
            </SelectWrapper>
            <SelectWrapper>
                <select name="slct5" id="slct5">
                    <option value="Tunisian bar association">Tunisian bar association</option>
                    <option value="Tunisian bar association2">Tunisian bar association2</option>
                    <option value="Tunisian bar association3">Tunisian bar association3</option>
                    <option value="Tunisian bar association4">Tunisian bar association4</option>
                </select>
            </SelectWrapper>
            </div>
            </AdmissionWrapper>
            <CountiesWrapper>
            <span>Counties</span>
            <SelectWrapper>
                <select name="slct6" id="slct6">
                    <option value="Tunisia">Tunisia</option>
                    <option value="France">France</option>
                </select>
            </SelectWrapper>
            </CountiesWrapper>
            </form>
            </>
    )
    }
}

return(
    <>
    <IconWrapper>
            <FontAwesomeIcon onClick={()=>props.handleEditData2(document.querySelector<HTMLFormElement>('.selectedForm'))} style={{marginRight: "10px", cursor: "pointer"}} icon= {props.edit2===true ? ['fas', 'save'] : ['fas', 'pencil-alt']} />
            </IconWrapper>
        {choosenInfo}
    </>
)
}