import React from 'react'
import { Link } from "gatsby"
import Navbar from "../components/navbar"
import ContentContainer from "../components/contentContainer"
import Header from "../components/header"
import ContentNav from "../components/ContentNav"

const IndexPage = () => (
  <div class="bg-light-gray">
    <Navbar />
    <div class="ma3">
      <Header />
      <ContentNav />
      <ContentContainer />
    </div>
    
  </div>

)

export default IndexPage
