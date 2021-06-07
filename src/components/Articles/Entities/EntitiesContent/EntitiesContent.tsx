import React from 'react'
import styled from 'styled-components'




interface IEntitiesContent{
    view: string;
}
type  WrapperEntitiesCardType = {
    view: string;
}

export const EntitiesContent: React.FC<IEntitiesContent> = (props)=>{
    const WrapperEntitiesCard = styled.div<WrapperEntitiesCardType>`
    width: ${props.view==="M" ? "23%" : "50%"};

    height: 15vh;
    background-color: lightpink;
    display: flex;
    margin: 10px;
    >div:nth-of-type(1){
        width: 40%;
        height: 15vh;
        background-color: red;
    }
    >div:nth-of-type(2){
        background-color: brown;
    width: 80%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    }
    >div:nth-of-type(2)>p{
       font-size: 12px;
       width: 100%;
       text-align: left;
       color: lightgrey;
       
    }
    >div:nth-of-type(2)>span:nth-of-type(1){
        width:100%;
        padding:2px;
        color: darkblue;
        text-align: left;
        font-weight: bold;
    }
    >div:nth-of-type(2)> div> span{
        width:100%;
        padding:2px;
        color: lightgrey;
        text-align: left;
        font-size: 12px;
            }        
    >div>img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `
    console.log(props.view)

    const entities = []

    for(let i=0;i<23; i++){
      
            entities.push(<WrapperEntitiesCard view={props.view} >
                <div>
                    <img src={i%2===0 ? "/media/hector-j-rivas-1FxMET2U5dU-unsplash.jpg" : "/media/mediensturmer-aWf7mjwwJJo-unsplash.jpg"} alt="image" />
                </div>
                <div>
                   <span>{i%2===0 ? "Subsid Corp Ltd" : "World company SAS" }</span>
                   <div>
                    <p>Caracas 1050, Distrito Capital,</p>
                    <span>Wenezuela</span>
                </div>
                </div>
            </WrapperEntitiesCard>)
        
    }
    

    return(
        <><WrapperEntitiesCard view={props.view} >
                <div style={{backgroundColor:"white"}}>
                </div>
                <div>
                   <span>ABC Generic company</span>
                    <p>Caracas 1050, Distrito Capital,</p>
                    <span>Wenezuela</span>
                </div>
                </WrapperEntitiesCard>
        {entities}
        </>
    )
}