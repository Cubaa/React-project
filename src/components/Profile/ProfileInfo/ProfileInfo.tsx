import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const FirstInfoWrapper = styled.div`
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50%;
>p{
    margin: 0;
    padding-bottom: 2px;
}
>span{
    padding-bottom: 2px;
}
`
const SecondInfoWrapper = styled.div`
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50%;
>div:nth-of-type(1){
    box-sizing: border-box;
    padding-top: 10px;
    width: 100%;

    display: flex;
    justify-content: flex-end;
   
    align-items: center;
}
>div:nth-of-type(2){
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
  
    display: flex;
    justify-content: flex-end;
    height: 15vh;
    align-items: center;
    padding-bottom: 18px;
    >p{
        width: 100%;
        margin:0;
        padding-bottom: 2px;
        
    }
}
`

interface IEditData {
    handleEditData: (e:any, firsInfoEdit: any, secondEditForm: any) => void;
    edit: boolean;
    inputValue: {
        name: string;
        company: string;
        city: string;
        job: string;
        email: string;
        telephone: string;
    };

}

export const ProfileInfo: React.FC<IEditData> = (props)=>{
    
  

    const firsInfoEdit:any = []
    const secondInfoEdit: any = []
    for(let i=0; i<1;i++){
        if(props.edit===true){
            firsInfoEdit.push(<form className="firstEditForm">
                <input name="name" type="text" />
                <input name="company" type="text" />
                <input name="city" type="text" />
                <input name="job" type="text" />
                </form>)
                
            secondInfoEdit.push( <form className="secondEditForm">
                <input name="email" type="text" />
                <input name="telephone" type="text" />
                </form>)
               
             
        }else{
         
            firsInfoEdit.push(
                <>
                
                  
                    <p>{props.inputValue.name}</p>
                    
                    <p>{props.inputValue.company}</p>
                    <span>{props.inputValue.city}</span>
                    <span>{props.inputValue.job}</span>
                   
                    </>         )
                   
           secondInfoEdit.push( <><p>{props.inputValue.email}</p>
            <p>{props.inputValue.telephone}</p></>)
        }
       
    }
  
    return(
        <>
        <FirstInfoWrapper>
            {firsInfoEdit}
        </FirstInfoWrapper>
        <SecondInfoWrapper>
            <div>
            <FontAwesomeIcon onClick={(e)=>props.handleEditData(e, document.querySelector<HTMLFormElement>('.firstEditForm'), document.querySelector<HTMLFormElement>('.secondEditForm'))} style={{cursor: "pointer", paddingRight: "5px"}} icon= {props.edit===true ? ['fas', 'save'] : ['fas', 'pencil-alt']} />
            </div>
            <div>
               {secondInfoEdit}
            </div>
        </SecondInfoWrapper>
        </>
    )
}