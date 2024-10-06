

import './App.css'

import About from './Home.jsx/About'

import Complit from './Home.jsx/Complit'
import Contact from './Home.jsx/Contact'
import Footer from './Home.jsx/Footer'
import Hero from './Home.jsx/Hero'
import MainHero from './Home.jsx/MainHero'
import Project from './Home.jsx/Project'
import Skill from './Home.jsx/Skill'

function App() {
  

  return (
    <>
     <Hero></Hero>
    
        <MainHero></MainHero>
        <Complit></Complit>
        <About></About>
        <Skill></Skill>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
    </>
  )
}

export default App
