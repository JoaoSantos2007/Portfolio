import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main/Main';
import SocialBar from './components/SocialBar/SocialBar';
import EmailBar from './components/EmailBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialBar />
      <EmailBar />

      <Main />
      <Footer />
    </div>
  );
}

export default App;
