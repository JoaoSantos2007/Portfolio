import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main/Main';
import SocialBar from './components/SocialBar/SocialBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialBar />

      <Main />
    </div>
  );
}

export default App;
