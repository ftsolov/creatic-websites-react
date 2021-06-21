import './App.css';
import Header from './components/landing/Header.js'
import Hero from './components/landing/Hero.js'
import Steps from './components/landing/Steps.js'

function Landing() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Steps />
    </div>
  );
}

export default Landing;
