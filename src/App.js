import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import kseaLogo from './assets/ksea-logo.avif';
import kseaBanner from './assets/ksea-banner.avif';
import banner from './assets/below-navbar.gif';

function App() {
  return (
    <Router>
      <div className="App">

        <div className="flex items-center justify-center gap-4 mt-4">
          <img src={kseaBanner} alt="KSEA Banner" className="w-48 h-auto m-2"/>
          <p className="text-[#9e2136] text-lg font-semibold text-center w-[300px] flex-shrink-0">Korean-American Scientists and Engineers Association at USC</p>
          <img src={kseaLogo} alt="KSEA Logo" className="w-24 h-auto m-2"/>
        </div>
        <Navbar />

        <img src={banner} alt="banner" className="w-full h-6 object-cover" />

        {/* Below the banner changes */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>

      </div>
    </Router>
  );
}

export default App;
