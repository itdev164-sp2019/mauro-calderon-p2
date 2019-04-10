import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import {BaseContainer} from '../../Element'
import "./nav.css"


const UL = styled.ul`
display: block;
list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`
const Li = styled.li`
float: left;
display: block;
  color: white;
  text-align: center;
  padding: 20px 20px;
  text-decoration: none;
    :hover{
        background-color: #111;
    }
`
export const NavBar = () => (
   <div>
     <BaseContainer>
     <UL>
       <Li>
         <div id="one"><Link to="/" activeStyle={{color: "white"}}>Home</Link></div>
       </Li>
       <Li>
       <div id="two"><Link to="/page-2/" activeStyle={{color:"white"}}>Todo List</Link></div>
       </Li>
      </UL>
       </BaseContainer>
   </div>
)