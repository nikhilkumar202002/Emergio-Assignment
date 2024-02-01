import React from 'react'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Categorycards from './Components/Categorycards'
import Productslarge from './Components/Productslarge'
function App() {
  return (
    <>

    <Header/>

        <Banner/>
        <Categorycards/>
      
        <Productslarge/>
    </>
  )
}

export default App