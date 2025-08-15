import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import RightSidebarWidgets from './components/RightSidebarWidgets';

const App = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-primary text-white">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Topbar />
                <div className="flex-1 flex flex-col md:flex-row overflow-auto">
                    <Dashboard />
                    <RightSidebarWidgets />
                </div>
            </div>
        </div>
    );
};

export default App;