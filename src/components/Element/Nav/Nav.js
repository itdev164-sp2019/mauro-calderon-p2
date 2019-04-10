import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const UL = styled.ul`
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
  padding: 16px 16px;
  text-decoration: none;
    :hover{
        background-color: #111;
    }
`
const As = styled.a`
padding: 5px;
padding-left: 5px;
padding-top: 5px;
border: solid 2px;
border-color: white;
`

export const NavBar = () => (
   <div>
     <UL>
       <Li>
         <Link to="/"><As>Home</As></Link>
       </Li>
       <Li>
       <As>Todo List</As>
       </Li>
      </UL>
       
   </div>
)