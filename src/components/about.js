import React from 'react';
import portrait from "../../pictures/portrait.jpg"
import work from "../../pictures/work.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faMountain } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
export default() => (

    <section class="mw7 center avenir">
    <h2 class="baskerville fw1 ph3 ph0-l tc" id="about">About</h2>
    <article class="bt bb b--black-10">
        <div class="flex flex-column flex-row-ns">
          <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
            <img src={portrait} class="db" alt="Photo of a dimly lit room with a computer interface terminal." />
          </div>
          <div class="w-100 w-60-ns pl3-ns">
            <h1 class="f3 fw1 baskerville mt0 lh-title">Caameron Nakasone</h1>
            <p class="f6 f5-l lh-copy">
                Hi my name is Caameron Nakasone and I am a Post-Baccalaureate Computer Science Student currently in proccess 
                of obtaining my Masters in Computer Science. I make it a priority for me to produce quality work which I can be 
                proud of. I am working hard grow my understanding of programming and the endless amount of topics in Computer 
                Science. This website is a project to help me understand and learn the basics of web development, HTML, CSS, and 
                JavaScript.
                <br></br>
                <br></br>
                I am currently part of the PCEP program where I have interned at Multnomah County (QA), CDK Global(Developer), and
                Cayuse (Automation). I have worked on various projects and teams giving me a great amount of knowledge and experience in
                communication, teamwork, and software development practices. 
                <br></br>
                <br></br>
                I plan on finishing my degree in Spring of 2020, but am looking for full time employment or other oppurtunities in
                January of 2020.
            </p>
          </div>
        </div>
    </article>

    <h2 class="baskerville fw1 ph3 ph0-l tc" id="work">Work Experience</h2>
    <article class="bt bb b--black-10">
        <div class="flex flex-column flex-row-ns">
          <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
            <img src={work} class="db" alt="Photo of a dimly lit room with a computer interface terminal." />
          </div>
          <div class="w-100 w-60-ns pl3-ns">
            <p class="f6 f5-l lh-copy">
                <p class="b">PCEP Internship</p>
                The PCEP Internship gave me access to intern at three different companies in various roles. It has given me a great
                breadth of knowledge in the software engineering and prepared me to make my first step in to the software industry.
                <br></br>
                <p class="b">Cayuse | Portland, OR</p>
                Automation Engineering intern working on a automated testing framework for web applications. Also created Gatling tests for 
                load testing and discovering performance issues.
                <br></br>
                <p class="b">CDK Global | Portland, OR</p>
                Software Developer intern working on React components for the Output Services team. Designed and developed Excel Viewer 
                component to be used by the accounting team. Also worked on refactoring other components for internationalization.
                <br></br>
                <p class="b">Multnomah County | Portland, OR</p>
                QA intern focusing on functional testing and designing test strategies for their products. Developed base for automated testing
                framework using Selenium in C#. 

            </p>
          </div>
        </div>
    </article>

    <h2 class="baskerville fw1 ph3 ph0-l tc" id="contact">Contact</h2>
    <article class="bt bb b--black-10">
      <div class="cf">
        <div class="fl w-33 tc pt2">
          <FontAwesomeIcon icon={faEnvelopeOpen} />
          <p class="b">EMAIL</p>
          caameron@pdx.edu
        </div>
        <div class="fl w-33 tc pt2">
          <FontAwesomeIcon icon={faGithub} />
          <p class="b">GITHUB</p>
          <a href="https://github.com/caameron">Caameron's Github</a>
        </div>
        <div class="fl w-33 tc pt2">
          <FontAwesomeIcon icon={faLinkedin} />
          <p class="b">LinkedIn</p>
          <a href="https://www.linkedin.com/in/caameron-nakasone-831017111/">Caameron's LinkedIn</a>
        </div>
      </div>
    </article>
  </section>
)