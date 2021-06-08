import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const InternalWrapper = styled.div`
display: flex;

width: 96%;
flex-direction: column;


>div{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;

   
}
>div:nth-child(1){
    margin-bottom: 1px;
    background-color: #989cce;
}
>div:nth-child(2){
    margin-bottom: 10px;
    background-color: #989cce;
}

`
const WrapperUserInfo = styled.div`
display: flex;
align-items: center;
>div{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid black;
    margin-right: 10px;
}
>span{
    font-weight: bold;
    color: darkblue;
}
`
const WrapperMessage = styled.div`
>span{
    margin-left: 10px;
    color: darkblue;
}
`
const WrapperProfile = styled.div`
>span{
    margin-left: 10px;
    color: darkblue;
}`

export const ServicesProjects:React.FC = ()=>{
    return(
        <>
        <h3>Services & Projects</h3>
        <p>Corporate M&A and international acquisitions</p>
        <InternalWrapper>
            <div>
                <WrapperUserInfo>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <span>Firstname Lastname</span>
                </WrapperUserInfo>
                <WrapperMessage>
                <FontAwesomeIcon style={{color: "darkblue", fontSize: "18px"}} icon={['far', 'comment']} />
                    <span>Message</span>
                </WrapperMessage>
                <WrapperProfile>
                <FontAwesomeIcon  style={{color: "darkblue", fontSize: "18px"}} icon={['far', 'user']} />
                    <span>Profile</span>
                </WrapperProfile>
            </div>
            <div>
                <WrapperUserInfo>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <span>Firstname Lastname</span>
                </WrapperUserInfo>
                <WrapperMessage>
                <FontAwesomeIcon  icon={['far', 'comment']} />
                    <span>Message</span>
                </WrapperMessage>
                <WrapperProfile>
                <FontAwesomeIcon  icon={['far', 'user']} />
                    <span>Profile</span>
                </WrapperProfile>

            </div>
        </InternalWrapper>
        </>
    )
}