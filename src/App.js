import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Rocket from './components/rocket/rocket';
import Missions from './components/missions';
import Myprofile from './components/myprofile/myprofile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </div>
  );
}

export default App;
