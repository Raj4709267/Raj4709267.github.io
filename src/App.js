import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Name from "./Components/Name/Name";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Calendar from "./Components/GitHub/Calendar";
import Experience from "./Components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Name />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Calendar />
      <ContactMe />
    </div>
  );
}

export default App;
