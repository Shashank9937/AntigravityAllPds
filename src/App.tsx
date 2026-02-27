import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { IdeaEngine } from './components/IdeaEngine';
import { ValidationTracker } from './components/ValidationTracker';
import { WarPlan } from './components/WarPlan';
import { MvpSprint } from './components/MvpSprint';
import { GrowthMetrics } from './components/GrowthMetrics';
import { DecisionMatrix } from './components/DecisionMatrix';
import { DisciplineTracker } from './components/DisciplineTracker';
import { AiAutomations } from './components/AiAutomations';
import { NetworkCRM } from './components/NetworkCRM';
import { Financials } from './components/Financials';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ideas" element={<IdeaEngine />} />
            <Route path="/validation" element={<ValidationTracker />} />
            <Route path="/warplan" element={<WarPlan />} />
            <Route path="/sprint" element={<MvpSprint />} />
            <Route path="/growth" element={<GrowthMetrics />} />
            <Route path="/decisions" element={<DecisionMatrix />} />
            <Route path="/discipline" element={<DisciplineTracker />} />
            <Route path="/ai" element={<AiAutomations />} />
            <Route path="/network" element={<NetworkCRM />} />
            <Route path="/financials" element={<Financials />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
