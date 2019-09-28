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
      <div class="pa5 tc f6">© Caameron Nakasone. All Rights Reserved. 2019. Site Self Made</div>
    </div>
    
  </div>

)

export default IndexPage
