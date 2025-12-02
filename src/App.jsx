import Content from "./components/content";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Background from "./components/Background";
import Login from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";
import ForgotPassword from "./pages/Admin/ForgotPassword";
import ForgotUsername from "./pages/Admin/ForgotUsername";
import ResetPassword from "./pages/Admin/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Background />
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-grow pt-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path='/' Component={Content} />
            <Route path='/about' Component={About} />
            <Route path='/skills&projects' Component={Skills} />
            <Route path='/contact' Component={Contact} />
            <Route path='/admin/login' Component={Login} />
            <Route path='/admin/forgot-password' Component={ForgotPassword} />
            <Route path='/admin/forgot-username' Component={ForgotUsername} />
            <Route path='/admin/resetpassword/:resetToken' Component={ResetPassword} />
            <Route element={<ProtectedRoute />}>
              <Route path='/admin/dashboard' Component={Dashboard} />
            </Route>
            <Route path='*' element={<h1 className="text-center text-2xl mt-20">404 Not Found</h1>} />
          </Routes>
        </main>

        <footer className="py-6 text-center text-sm text-slate-500">
          <p>
            Made by{" "}
            <a
              href='https://github.com/samarpansarkar'
              target='_blank'
              rel="noopener noreferrer"
              className='font-bold text-accent-primary hover:text-accent-secondary transition-colors duration-300'
            >
              SAMARPAN SARKAR
            </a>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
