import React, { useState, useEffect } from 'react';
import { FaCloud, FaMoon, FaSun, FaBars } from 'react-icons/fa';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(() => {
        // Check initial mode from document
        return document.documentElement.classList.contains('dark');
    });

    // Ensure dark mode is enabled by default on mount
    useEffect(() => {
        document.documentElement.classList.add('dark');
        setDark(true);
    }, []);

    // Toggle dark mode by adding/removing 'dark' class on html element
    const handleToggleDark = () => {
        if (dark) {
            document.documentElement.classList.remove('dark');
            setDark(false);
        } else {
            document.documentElement.classList.add('dark');
            setDark(true);
        }
    };

    return (
        <>
            {/* Hamburger Icon */}
            <button
                className="fixed top-4 left-4 z-50 bg-accent p-2 rounded-md text-white focus:outline-none md:hidden"
                onClick={() => setOpen(true)}
            >
                <FaBars size={22} />
            </button>

            {/* Sidebar Overlay for mobile */}
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-screen w-64 bg-accent flex flex-col p-6 z-50 transition-transform duration-200 ${
                    open ? 'translate-x-0' : '-translate-x-full'
                } md:static md:translate-x-0 md:block`}
            >
                <div className="flex items-center mb-10">
                    <FaCloud className="text-2xl mr-2" />
                    <span className="font-bold text-xl">Service Monitor</span>
                </div>
                <nav className="flex-1 flex flex-col">
                    <div className="flex flex-col gap-2 mb-8">
                        <button className="bg-secondary rounded px-3 py-2 text-left hover:bg-primary transition-colors">Dashboard</button>
                        <button className="bg-secondary rounded px-3 py-2 text-left hover:bg-primary transition-colors">Alerts</button>
                        <button className="bg-secondary rounded px-3 py-2 text-left hover:bg-primary transition-colors">Settings</button>
                        <button className="bg-secondary rounded px-3 py-2 text-left hover:bg-primary transition-colors">Help / About</button>
                    </div>
                    {/* Service Filters below Help/About */}
                    <div className="mt-2">
                        <div className="text-muted mb-2">Services</div>
                        <div className="flex flex-col gap-2">
                            <button className="bg-secondary rounded px-3 py-2 text-left hover:bg-primary transition-colors">All</button>
                            <button className="bg-secondary rounded px-3 py-2 text-left hover:bg-primary transition-colors">Running</button>
                            <button className="bg-secondary rounded px-3 py-2 text-left hover:bg-primary transition-colors">Stopped</button>
                        </div>
                    </div>
                </nav>
                {/* Dark Mode Toggle at the very bottom */}
                <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="text-muted">Dark Mode</span>
                    <button className="bg-secondary rounded-full p-2" onClick={handleToggleDark}>
                        {dark ? <FaMoon /> : <FaSun />}
                    </button>
                </div>
                {/* Close button for mobile */}
                <div className="mt-4 md:hidden">
                    <button
                        className="w-full bg-red-500 text-white rounded px-3 py-2 hover:bg-red-600 transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        Close
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;