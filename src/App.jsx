// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Homepage';
import IssueReportingPage from './pages/IssueReporting/IssueReportingPage';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/report-issue" element={<IssueReportingPage />} />
            </Routes>
        </Router>
    );
};

export default App;
