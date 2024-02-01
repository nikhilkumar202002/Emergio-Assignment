import React from 'react'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Categorycards from './Components/Categorycards'
import Productslarge from './Components/Productslarge'
import Offerzone from './Components/Offerzone'
import Productsmall from './Components/Productsmall'
import Footer from './Components/Footer'
function App() {
  return (
    <>

    <Header/>

        <Banner/>
        <Categorycards/>
      
        <Productslarge/>
        <Offerzone/>
        <Productsmall/>
        <Footer/>

    </>
  )
}

export default App