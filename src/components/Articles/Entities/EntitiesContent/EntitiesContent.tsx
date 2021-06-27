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
   background-color: whitesmoke;
    display: flex;
    margin: 10px;
    >div{
        box-shadow: 0 1px 6px -2px rgba(0,0,0,.2), 0 1px 6px -2px rgba(0,0,0,.2);
    

    }
    >span{
        font-size: 8px;
    }
    >div:nth-of-type(1){
        width: 40%;
        height: 15vh;
        
    }
    >div:nth-of-type(2){
      
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
        font-size: 8px;
            }        
    >div>img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `
    

    const entities = []

    for(let i=0;i<23; i++){
      
            entities.push(<WrapperEntitiesCard view={props.view} >
                <div>
                    <img src={i%2===0 ? "/media/hector-j-rivas-1FxMET2U5dU-unsplash.jpg" : "/media/mediensturmer-aWf7mjwwJJo-unsplash.jpg"} alt="image" />
                </div>
                <div>
                   <span style={{margin: "0"}}>{i%2===0 ? "Subsid Corp Ltd" : "World company SAS" }</span>
                   <div>
                    <p style={{fontSize: "12px", margin: "0", paddingTop: "12px"}}>Caracas 1050, Distrito Capital,</p>
                    <span style={{margin: "0", padding: "0", fontSize: "12px", color: "black"}}>Wenezuela</span>
                </div>
                </div>
            </WrapperEntitiesCard>)
        
    }
    

    return(
        <><WrapperEntitiesCard view={props.view} >
                <div style={{backgroundColor:"white"}}>
                </div>
                <div style={{display: "flex", justifyContent: "flex-start"}}>
                   <span style={{padding: "2px", margin: "0"}}>ABC Generic company</span>
                    <p style={{margin: "0", color: "black"}}>Caracas 1050, Distrito Capital,</p>
                    <span style={{fontSize: "12px", margin: "0"}}>Wenezuela</span>
                </div>
                </WrapperEntitiesCard>
        {entities}
        </>
    )
}