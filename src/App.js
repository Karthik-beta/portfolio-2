import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
// import Certificates from "./components/certificates";

function App() {
  return (
    <>
      <CustomCursor />
      <Hero />
      <Projects />
      <TechStack />
      {/* <Certificates /> */}
      <Contact />
    </>
  );
}

export default App;
