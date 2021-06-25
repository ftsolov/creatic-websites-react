import './App.css';
import React, { useState } from 'react'
import HeaderComponent from './components/landing/HeaderComponent.js'
import Hero from './components/landing/Hero.js'
import Steps from './components/landing/Steps.js'
import Pricing from './components/landing/Pricing.js'
import Contact from './components/landing/Contact.js'
import Footer from './components/landing/Footer.js'
import CTA from "./components/landing/CTA";
import ComingSoonPopup from "./components/landing/ComingSoonPopup";

function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const handleClick = () => {
    setModalVisible(true)
    document.body.style.overflow = "hidden"
    document.body.style.height = "100%"
  }

  const handleClose = () => {
    setModalVisible(!modalVisible)
    document.body.style.overflow = "auto"
    document.body.style.height = "auto"
  }

  return (
    <div className="App">
      {modalVisible ? <ComingSoonPopup handleClose={handleClose}/> : null}
      <HeaderComponent handleClick={handleClick} />
      <Hero handleClick={handleClick} />
      <Steps handleClick={handleClick} />
      <Pricing />
      <CTA handleClick={handleClick} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
