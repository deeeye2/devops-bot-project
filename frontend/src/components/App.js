import React from 'react';
import Header from './components/Header';
import CLISection from './components/CLISection';
import ProblemSubmission from './components/ProblemSubmission';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    const handleLogout = () => {
        // Add logout functionality here
    };

    return (
        <div className="container">
            <Header onLogout={handleLogout} />
            <div className="content">
                <h1>Welcome to the DevOps Bot Dashboard</h1>
                <CLISection />
                <ProblemSubmission />
                <UserProfile />
            </div>
            <Footer />
        </div>
    );
};

export default App;
