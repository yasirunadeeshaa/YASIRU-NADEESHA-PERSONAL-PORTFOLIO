// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import MyProject from './components/Project';
// import AboutMe from './components/AboutMe';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Navigation />
//         <section id="/">
//           <Hero />
//         </section>
        
//         <section id="projects">
//           <MyProject />
//         </section>
        
//         <section id="contact">
//           <Contact />
//         </section>
//         {/* <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/about" element={<AboutMe />} />
//           <Route path="/projects" element={<MyProject />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes> */}
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MyProject from './components/Project';
import AboutMe from './components/AboutMe';
import Skill from './components/Skill';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        
        <section id="home" >
          <Hero />
        </section>
        
        <section id="about" >
          <AboutMe />
        </section>

        <section id="skills" >
          <Skill />
        </section>
        
        <section id="projects" >
          <MyProject />
        </section>
        
      </div>
    </Router>
  );
}

export default App;