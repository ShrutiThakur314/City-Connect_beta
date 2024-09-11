import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Homepage';
import IssueReportingPage from './pages/IssueReporting/IssueReportingPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'; 

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/report-issue" element={<IssueReportingPage />} />
                <Route path="/dashboard/*" element={<DashboardPage />} />
                <Route path="/projects" element={<ProjectsPage />} />  
            </Routes>
        </Router>
    );
};

export default App;
