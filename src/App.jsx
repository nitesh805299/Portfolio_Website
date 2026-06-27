import React, { useEffect, useState } from 'react'

import Navbar from './component/Navbar/Navbar' 
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Services from './component/Services/Services'
import Project from './component/Project/Project'
import Contect from './component/Contect/Contect'

const App = () => {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.14 }
    )

    revealItems.forEach((item) => observer.observe(item))

    const handleScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToHome = () => {
    document.getElementById('Hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    < div className="app">
      <Navbar/>
    <div className="main-container">
      <section id="Hero" className="reveal"><Hero/></section>
      <section id="About" className="reveal"> <About/></section>
      <section id="Services" className="reveal"> <Services/> </section>
      <section id="Project" className="reveal"><Project/></section>
      <section id="Contect" className="reveal"><Contect/></section>
    </div>
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <h2 className="footer-logo">NK</h2>
          <p>
            Frontend developer building responsive, clean, and modern web
            experiences with HTML, CSS, JavaScript, and React.
          </p>
          <div className="footer-social">
            <a href="https://github.com/nitesh805299" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="ri-github-fill"></i>
            </a>
            <a href="mailto:niteshchaurasia515@gmail.com" aria-label="Email">
              <i className="ri-mail-fill"></i>
            </a>
            <a href="#Contect" aria-label="Contact">
              <i className="ri-chat-3-fill"></i>
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="#Hero">Home</a>
          <a href="#About">About</a>
          <a href="#Services">Services</a>
          <a href="#Project">Projects</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:niteshchaurasia515@gmail.com">niteshchaurasia515@gmail.com</a>
          <a href="#Contect">Send Message</a>
        </div>
      </div>
      <p className="footer-bottom">© 2026 Nitesh Chaurasiya. All rights reserved.</p>
    </footer>
    <button
      className={`scroll-top ${showTop ? 'visible' : ''}`}
      type="button"
      onClick={scrollToHome}
      aria-label="Go to home"
    >
      <i className="ri-arrow-up-line"></i>
    </button>
    </div>
  )
}

export default App
