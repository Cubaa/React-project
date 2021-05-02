
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WrapperContainerCard = styled.div`
box-sizing: border-box;

height: 35vh;
background-color: white;
position: relative;
margin: 0px 5px 0px 5px;
border-radius: 5px;
box-shadow: 0 2px 8px -2px rgba(0,0,0,.2), 0 2px 8px -2px rgba(0,0,0,.2);
>a{
  display: block;
  margin-left: 83px;
 padding-top:5px;
  color: #232C47;
  font-weight: bold;
  width:65%;
  text-align:center;
  text-decoration:none;
  font-size: 14px;
}
`
const WrapperImage = styled.div`
overflow:hidden;
width: 100%;
height: 50%;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
>img{
  width:100%;
  height: 100%;
  object-fit: cover;
}
`
const WrapperAbsoluteCard = styled.div`
position: absolute;
top:30%;
left:3%;
width: 35%;
height: 35%;
background-color: white;
border-radius: 3px;
box-shadow: 0 1px 6px -2px rgba(0,0,0,.2), 0 4px 6px -2px rgba(0,0,0,.2);
`
const AbsoluteCardIcon = styled.div`
>svg{
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  color: #adb5bd;
  font-size: 45px;

}
`
const WrappperInfo = styled.div`
width:80%;
padding-top:30px;
padding-left: 3%;
display:flex;
align-items: center;
justify-content: space-around;

>span:nth-of-type(1){
 color: #adb5bd;
 padding-right: 2px;
 font-size: 13px;
}
>span:nth-of-type(3){
  color: #adb5bd;
  padding-right: 8px;
  padding-left: 2px;
  font-size: 13px
 }
>span:nth-of-type(2){
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #232C47;

}
`
const WrapperInfoIcon = styled.div`
display: inline;
color: #adb5bd;
padding-right: 8px;
`
const WrapperInfoUpdate = styled.div`
padding-left: 5%;
font-size: 11px;
color: #adb5bd;
padding-top: 14px;
`
export const WorkspacesSlider: React.FC = ()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    }
    return(
        <>
         <div>
        <Slider {...settings}>
          <div>
            <WrapperContainerCard>
                <WrapperImage>
                    <img src="/media/adolfo-felix-Yi9-QIObQ1o-unsplash.jpg" alt="card-image"/>
                </WrapperImage>
                <a href="#">Client contract</a>
                <WrappperInfo>
                  <span>
                    <WrapperInfoIcon>
                      <FontAwesomeIcon icon={['fas', 'file-signature']} />
                    </WrapperInfoIcon>
                    Contract
                  </span>
                  <span></span>
                  <span>
                  <WrapperInfoIcon>
                    <FontAwesomeIcon icon={['fas', 'user-friends']} />
                  </WrapperInfoIcon>
                    150 users
                  </span>
                </WrappperInfo>
                <WrapperInfoUpdate>
                  <span>Last update 2 days ago</span>
                </WrapperInfoUpdate>
           
            <WrapperAbsoluteCard>
            <AbsoluteCardIcon>
              <FontAwesomeIcon icon={['fas', 'file-signature']} />
            </AbsoluteCardIcon>
              
            </WrapperAbsoluteCard>
            </WrapperContainerCard>
          </div>
          <div>
          <WrapperContainerCard>
          <WrapperImage>
                    <img src="/media/adolfo-felix-Yi9-QIObQ1o-unsplash.jpg" alt="card-image"/>
                </WrapperImage>
                <a href="#">Supplier contract</a>
                <WrappperInfo>
                  <span>
                    <WrapperInfoIcon>
                      <FontAwesomeIcon icon={['fas', 'file-signature']} />
                    </WrapperInfoIcon>
                    Contract
                  </span>
                  <span></span>
                  <span>
                  <WrapperInfoIcon>
                    <FontAwesomeIcon icon={['fas', 'user-friends']} />
                  </WrapperInfoIcon>
                    150 users
                  </span>
                </WrappperInfo>
                <WrapperInfoUpdate>
                  <span>Last update 2 days ago</span>
                </WrapperInfoUpdate>
           
            <WrapperAbsoluteCard>
            <AbsoluteCardIcon>
              <FontAwesomeIcon icon={['fas', 'file-signature']} />
            </AbsoluteCardIcon>
              
            </WrapperAbsoluteCard>
            </WrapperContainerCard>
          </div>
          <div>
          <WrapperContainerCard>
          <WrapperImage>
                    <img src="/media/adolfo-felix-Yi9-QIObQ1o-unsplash.jpg" alt="card-image"/>
                </WrapperImage>
                <a href="#">Corporate</a>
                <WrappperInfo>
                  <span>
                    <WrapperInfoIcon>
                      <FontAwesomeIcon icon={['far', 'building']} />
                    </WrapperInfoIcon>
                    Corporate
                  </span>
                  <span></span>
                  <span>
                  <WrapperInfoIcon>
                    <FontAwesomeIcon icon={['fas', 'user-friends']} />
                  </WrapperInfoIcon>
                    150 users
                  </span>
                </WrappperInfo>
                <WrapperInfoUpdate>
                  <span>Last update 2 days ago</span>
                </WrapperInfoUpdate>
           
            <WrapperAbsoluteCard>
            <AbsoluteCardIcon>
              <FontAwesomeIcon icon={['fas', 'building']} />
            </AbsoluteCardIcon>
              
            </WrapperAbsoluteCard>
          </WrapperContainerCard>
          </div>
          <div>
          <WrapperContainerCard>
          <WrapperImage>
                    <img src="/media/adolfo-felix-Yi9-QIObQ1o-unsplash.jpg" alt="card-image"/>
                </WrapperImage>
                <a href="#">Group norms</a>
                <WrappperInfo>
                  <span>
                    <WrapperInfoIcon>
                      <FontAwesomeIcon icon={['fas', 'book']} />
                    </WrapperInfoIcon>
                    Norms
                  </span>
                  <span></span>
                  <span>
                  <WrapperInfoIcon>
                    <FontAwesomeIcon icon={['fas', 'user-friends']} />
                  </WrapperInfoIcon>
                    150 users
                  </span>
                </WrappperInfo>
                <WrapperInfoUpdate>
                  <span>Last update 2 days ago</span>
                </WrapperInfoUpdate>
           
            <WrapperAbsoluteCard>
            <AbsoluteCardIcon>
              <FontAwesomeIcon icon={['fas', 'book']} />
            </AbsoluteCardIcon>
              
            </WrapperAbsoluteCard>
            </WrapperContainerCard>
          </div>
          <div>
           <WrapperContainerCard>
           <WrapperImage>
                    <img src="/media/adolfo-felix-Yi9-QIObQ1o-unsplash.jpg" alt="card-image"/>
                </WrapperImage>
                <a href="#">Real estate contracts</a>
                <WrappperInfo>
                  <span>
                    <WrapperInfoIcon>
                      <FontAwesomeIcon icon={['fas', 'file-signature']} />
                    </WrapperInfoIcon>
                    Contract
                  </span>
                  <span></span>
                  <span>
                  <WrapperInfoIcon>
                    <FontAwesomeIcon icon={['fas', 'user-friends']} />
                  </WrapperInfoIcon>
                    150 users
                  </span>
                </WrappperInfo>
                <WrapperInfoUpdate>
                  <span>Last update 2 days ago</span>
                </WrapperInfoUpdate>
           
            <WrapperAbsoluteCard>
            <AbsoluteCardIcon>
              <FontAwesomeIcon icon={['fas', 'file-signature']} />
            </AbsoluteCardIcon>
              
            </WrapperAbsoluteCard>  
           </WrapperContainerCard>
          </div>
        
        </Slider>
      </div>
        </>
    )
}