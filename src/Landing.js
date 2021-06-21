import './App.css';
import Header from './components/landing/Header.js'
import Hero from './components/landing/Hero.js'
import Steps from './components/landing/Steps.js'
import Pricing from './components/landing/Pricing.js'
import Contact from './components/landing/Contact.js'

function Landing() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Steps />
      <Pricing />
      <Contact />
    </div>
  );
}

export default Landing;
