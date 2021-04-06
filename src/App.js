import React, { useState } from 'react'
import './assets/styles/bundle.scss'
import Layout from './components/layout'
import Home from './pages/home'
import Profile from './pages/profile'
import Skills from './pages/skills'
import Projects from './pages/projects'
import Contact from './pages/contact'

export default function App({ router }) {
  return (
    <Layout>
      <Home />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}
