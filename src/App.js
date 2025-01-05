import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import kseaLogo from './assets/ksea-logo.avif';
import kseaBanner from './assets/ksea-banner.avif';

function App() {
  return (
    <div className="App">
      <div className="heading">
      <img src={kseaBanner} alt="KSEA Banner" className="banner"/>
      <p className="title">Korean-American Scientists and Engineers Association at USC</p>
      <img src={kseaLogo} alt="KSEA Logo" className="logo"/>
      </div>
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload okok.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
