import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div className="bg-slate-900">
      <Nav/>
      <Banner />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Dashboard