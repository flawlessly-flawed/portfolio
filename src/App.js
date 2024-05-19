import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from './components/About'
import Portfolio from './components/Portfolio'
import Socials from './components/socials'
import Experience from './components/experience'
import Contacts from './components/Contacts'


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contacts/>
      <Socials/>
    </div>
  );
}

export default App;
