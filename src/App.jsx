
import Content from "./components/content";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./components/about";
import Skills from "./components/skills"
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Content} />
          <Route path='/about' Component={About} />
          <Route path='/skills&projects' Component={Skills} />
          <Route path='/contact' Component={Contact} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;