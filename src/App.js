import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Homepage/home'; // The main component you shared
import GraphicDesign from './Categories/GraphicDesign/GraphicDesign';
import Projects from './Categories/Projects/Projects';
import UXDesigns from './Categories/UxuiDesigns/UxuiDesign';
import Photography from './Categories/Photography/Photography';
import Designs3D from './Categories/3dDesign/3dDesign';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GD" element={<GraphicDesign />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/uxui" element={<UXDesigns />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/3d" element={<Designs3D />} />
      </Routes>
    </Router>
  );
};

export default App;
