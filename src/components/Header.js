import React, {useState} from 'react';
import styled from "styled-components";
import {selectCars} from "../features/car/carSlice";
import {useSelector} from "react-redux";





function Header() {

  const [burgerStatus,setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    
    
        
        <Menu>
        <a>
            <img src="/images/logo.svg" alt=""/>
        </a>
        <Something>
        {cars && cars.map((car,index)=>
          <a key={index} href="#">{car}</a>
        )}
        </Something>
        <RightMenu>
          <a href='#'>Shop</a>
          <a href='#'>Tesla Account</a>
          <a onClick={()=>setBurgerStatus(true)} href='#'>Menu</a>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
        <CloseWrapper onClick={()=>setBurgerStatus(false)}>
               X
        </CloseWrapper>
        {cars && cars.map((car,index)=>
          <li key={index}><a href="#">{car}</a></li>
        )}
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-in</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadster</a></li>
        </BurgerNav>
        </Menu>
   

  )
}

export default Header


const Menu = styled.div`
   display:flex;
   align-items:center;
   justify-content:c  min-height:60px;
    position:fixed;
   
    align-items:center;
    padding:0 20px;
    left:0;
    right:0;enter;
    flex:1;
    margin-top:10px;
    z-index:1;

    

    a{
      font-weight:600;
      text-transform:uppercase;
      padding:0 10px;
      flex-wrap:nowrap;
    }

`
const Something = styled.div`
  margin-left:420px;

  @media(max-width:768px){
    display:none;
  }
`

const RightMenu = styled.div`
    font-weight:600;
    text-transform:uppercase;
    
    margin-left:220px;
   
`

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform: ${props => props.show?'translateX(0%)':'translateX(100%)'};
    transition:transform 0.2s;

    li{
       padding:15px 0;
       border-bottom:1px solid rgba(0,0,0,.2);

       a {
        font-weight:600;
       }
    }
`



const CloseWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
  cursor:pointer;
`