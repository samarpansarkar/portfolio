
import Content from "./components/content";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./components/about";
import Skills from "./components/skills"
import Contact from "./components/contact";
import LoginPage from "./components/LoginPage";

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
          <Route path='/login' Component={LoginPage} />
          <Route path='*' component={() => <h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      <div className="flex justify-center">
        <h1 className="flex">made by <span className="font-bold ml-2 uppercase cursor-pointer text-stone-600 hover:text-purple-600"><a href="https://github.com/samarpansarkar" target='_blank'>samarpan sarkar</a></span></h1>
      </div>


    </div>
  );
}

export default App;