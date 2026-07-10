import React from 'react'
import NavBar from '../components/layouts/NavBar'
import Hero from '../components/Home/Hero'
import BooksSection from '../components/Home/BooksSection'
import Footer from '../components/layouts/Footer'

function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <BooksSection />
    <Footer />
    </>
  )
}

export default Home