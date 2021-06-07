import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WrapperSelectEntities = styled.div`
box-sizing: border-box;
height: 5vh;
width: 20%;
/* background-color: green; */
display: flex;
border: 1px solid black;
box-shadow: 0 2px 10px -2px rgba(0,0,0,.2), 0 2px 10px -2px rgba(0,0,0,.2);
border-radius: 3px;
`
const WrapperIconSelect = styled.div`
`
const WrapperSelect = styled.div`
box-sizing: border-box;
/* background-color: yellow; */
display: flex;
width:100%;
height: 5vh;
justify-content: flex-start;
height: auto;
position: relative;
padding-left: 10px;
padding-right: 5px;
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

const WrapperDots = styled.div`
width: 15%;
height: 5vh;
/* background-color: deepskyblue; */
display: flex;
justify-content: center;
align-items: center;

>div{
    height: 4vh;
    padding-left: 4px;
    padding-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid black;
}
`
const WrapperSort = styled.div`
width: 15%;
height: 5vh;
/* background-color: hotpink; */
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
>span{
    
    font-size: 10px;
    margin-left:5px;
   
   
}
`
const WrapperFilters = styled.div`
width: 17%;
height: 5vh;
/* background-color: orange; */
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
>span{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4vh;
    font-size: 10px;
    margin-left:5px;
    border-right: 1px solid black;
    padding-right: 10px;
}
`
const WrapperResize = styled.div`
width: 14%;
height: 5vh;
/* background-color: lightgreen; */
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
>div{
    height: 4vh;
    padding-left: 4px;
    padding-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid black;

}
`
const WrapperShare = styled.div`
width: 15%;
height: 5vh;
/* background-color: lightsalmon; */
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
>span{
    font-size: 10px;
    margin-left:5px;
 
}
`
interface IResizeEntities{
    changeResizeEntities: (e: any)=>void
}
export const MixSettings: React.FC<IResizeEntities>= (props)=>{
    return(
        <>
        <WrapperSelectEntities>
            <WrapperSelect>
            <select name="choosePosts" id="choosePosts">
                <option value="allPosts">All</option>
                <option value="yourPosts">Your</option>
            </select>
            </WrapperSelect>
        </WrapperSelectEntities>
        <WrapperDots>
            <div>
            <FontAwesomeIcon style={{cursor: "pointer"}} icon={['fas', 'ellipsis-h']} />
            </div>
        </WrapperDots>
        <WrapperSort>
             <FontAwesomeIcon style={{cursor: "pointer", fontSize: "12px"}} icon={['fas', 'sort']} />
             <span>Sort</span>
        </WrapperSort>
        <WrapperFilters>
        <FontAwesomeIcon style={{cursor: "pointer", fontSize: "10px"}} icon={['fas', 'filter']} />
             <span>Filters</span>
        </WrapperFilters>
        <WrapperResize>
            <div>
            <FontAwesomeIcon onClick={(e)=>props.changeResizeEntities(e)} style={{cursor: "pointer", fontSize: "14px"}} icon={['fas', 'expand-alt']} />
            </div>
        </WrapperResize>
        <WrapperShare>
        <FontAwesomeIcon style={{cursor: "pointer", fontSize: "10px"}} icon={['fas', 'share']} />
             <span>Share</span>
        </WrapperShare>
        </>
    )
}