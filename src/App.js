import './index.css';
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import Companies from './components/Companies';
import About from './components/About';
import Service from './components/Service';
import Skills from './components/Skills';
import Frameworks from './components/Frameworks';
import Works from './components/Works';
import Form1 from './components/Form';
import Footer from './components/Footer';


function App() {
  return (
		<div className='App'>
      <NavigationBar />
      <Hero />
      <Companies />
        <About />
      <Service />
      <Skills />
      <Frameworks />
      <Works/>
      <Form1 />
      <Footer />
      
      
		</div>
	);
}

export default App;
