import React from 'react'
import Hero from '../components/Home/Hero'
import BooksSection from '../components/Home/BooksSection'
import Footer from '../components/layouts/Footer'
import NavbBar from '../components/layouts/NavbBar'

function Home() {
  return (
    <>
    <NavbBar />
    <Hero />
    <BooksSection />
    <Footer />
    </>
  )
}

export default Home