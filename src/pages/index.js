import React from 'react'
import { Link } from "gatsby"
import Navbar from "../components/navbar"
import Header from "../components/header"
import ContentNav from "../components/ContentNav"
import About from "../components/about"

const IndexPage = () => (
  <div class="bg-light-gray">
    <Navbar />
    <div class="ma3">
      <Header />
      <ContentNav />
      <About />
    </div>
    
  </div>

)

export default IndexPage
