import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const WrapperIconSelect = styled.div`
display: flex;
align-items: center;
width:45%;

border: 2px solid darkblue;
justify-content: center;

>div{
    width: 22px;
    height: 22px;
    padding-left:15px;
}
>div img{
    width: 100%;
    height: 100%;
}
`
const WrapperSelect = styled.div`


display: flex;
flex-basis: 55%;
justify-content: flex-start;
height: auto;
position: relative;
padding-left: 10px;
&:after {
    position: absolute;
    content: "";
    width: 0.6em;
    height: 0.4em;
    background-color: #232C47;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  z-index:999;
    top: 50%;
    left: 85%;
    transform: translate(-50%, -50%);
  }
  >select{
    cursor: pointer;
    
      position:relative;
      flex-basis: 90%;
      border-style: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      color: blue;
      background-color: transparent;
  }
  >select::-ms-expand{
      display: none;
  }
  >select:focus{
      outline: none;
  }


`
const WrapperInput = styled.div`
display: flex;
width: 40%;
margin-right: 10px;
align-items: center;
border: 0.7px solid grey;
>input{
   width: 80%;
   outline: none;
   border: none;
   padding: 4px;
}
>input:focus{
    outline:none;
}
>div{
 width:20%;
 
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: white;
 padding: 2px;
}
>div img{
    width:82.3%;
    height: 82.3%;
}


`

export const EntitiesMenuSettings: React.FC = ()=>{
    return(
        <>
         <WrapperInput>
            <input type="text" placeholder="Search..."/>
            <div>
                <img src="/media/search.svg" alt="search" />
            </div>
        </WrapperInput>
        <WrapperIconSelect>
            <div>
                <img src="/media/signal.svg" alt="" />
            </div>
            <WrapperSelect>
            <select name="choosePosts" id="choosePosts">
                <option value="allPosts">Followed</option>
                <option value="yourPosts">Your posts</option>
            </select>
            </WrapperSelect>
        </WrapperIconSelect>
        </>
    )
}