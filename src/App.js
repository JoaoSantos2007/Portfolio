import './App.css';
import Navbar from './components/Navbar';
import test from "./assets/images/logo.png"

function App() {
  return (
    <div className="App">
      <Navbar />

      <img src={test} style={{height: "1000px"}} alt="" />
    </div>
  );
}

export default App;
