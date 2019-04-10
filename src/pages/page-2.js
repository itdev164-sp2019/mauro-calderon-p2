import React from "react"
import Todolist from '../components/Element/TodoList/Todolist'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {BaseContainer} from '../components/Element'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <BaseContainer>
    <Todolist></Todolist>
    </BaseContainer>
  </Layout>
)

export default SecondPage
