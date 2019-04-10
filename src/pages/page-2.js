import React from "react"
import Todolist from '../components/Element/TodoList/Todolist'
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Todolist></Todolist>
  </Layout>
)

export default SecondPage
