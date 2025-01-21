import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main/Main';
import Achievements from './pages/Achievements/Achievements';
import SocialBar from './components/SocialBar/SocialBar';
import EmailBar from './components/EmailBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SocialBar />
        <EmailBar />

        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/achievements' element={<Achievements />}/>
        </Routes>

        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
