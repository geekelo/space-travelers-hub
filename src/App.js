import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Rocket from './components/rocket';
import Missions from './components/missions';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
