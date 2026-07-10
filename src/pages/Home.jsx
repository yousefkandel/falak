import React from 'react'
import Navbar from '../components/layouts/Navbar'
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