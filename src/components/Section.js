import { produceWithPatches } from 'immer';
import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade'; 

function Section(props) {
  return (
    <Container>
      <Wrap bgImage={props.source}>
      <Fade bottom>
        <ItemText>
            <h1>{props.modelName}</h1>
            <p>{props.modelBrief}</p>
        </ItemText>
        </Fade>
        <Buttons>
        
            <ButtonGroup>
            <Fade left>
                <LeftButton>
                    {props.leftbutton}
                </LeftButton>
            </Fade>
               {props.rightbutton &&<Fade right> <RightButton>
                    {props.rightbutton}
                </RightButton></Fade>}
            </ButtonGroup>
        
            <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
      </Wrap>
    </Container>
  );
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:url("/images/model-s.jpg");
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    z-index:10;
    background-image: ${props => `url("/images/${props.bgImage}")`}
    
`
const ItemText = styled.div`
    text-align:center;
    z-index:-1;
    padding-top:15vh; 
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
    }
`

const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
`

const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.65;
    color:black;
`

const DownArrow = styled.img`
    height:40px;
    animation: animateDown infinite 1.5s;
    overfloe-x:hidden;
`
const Buttons = styled.div`

`
const Container = styled.div`
    
`
