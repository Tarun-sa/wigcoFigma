import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from "./component/Home"
import Creators from "./component/Creators"
import Campaign from "./component/Campaign"
import Profile from "./component/Profile"



function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creators" element={<Creators/>} />
        <Route path="/campaign" element={<Campaign/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
