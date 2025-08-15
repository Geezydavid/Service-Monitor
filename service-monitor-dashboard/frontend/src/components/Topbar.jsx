import React, { useState } from 'react';
import { FaSearch, FaSyncAlt, FaPlus, FaDownload, FaExpand } from 'react-icons/fa';
import AddServiceModal from './AddServiceModal';

const Topbar = () => {
  const [showModal, setShowModal] = useState(false);

  // Example data, replace with your real data source
  const services = [
    { name: 'web-server', uptime: '100%', downtime: '0%', status: 'Running' },
    { name: 'database', uptime: '99%', downtime: '1%', status: 'Stopped' },
    { name: 'cache', uptime: '100%', downtime: '0%', status: 'Running' },
    { name: 'worker', uptime: '70%', downtime: '30%', status: 'Stopped' },
  ];

  const handleExportLogs = () => {
    // CSV header
    const header = ['Service', 'Uptime', 'Downtime', 'Status'];
    // CSV rows
    const rows = services.map(s => [s.name, s.uptime, s.downtime, s.status]);
    // Combine header and rows
    const csvContent = [header, ...rows].map(e => e.join(',')).join('\n');

    // Create a blob and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'service-logs.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <header className="flex items-center justify-between px-8 py-4 bg-primary border-b border-border">
        <div className="flex items-center w-1/2">
          <div className="relative w-full">
            <span className="absolute left-3 top-2.5 text-muted">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded bg-secondary text-white placeholder-muted outline-none"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium">
            <FaSyncAlt className="mr-2" /> Refresh
          </button>
          <button
            className="flex items-center bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded font-medium"
            onClick={() => setShowModal(true)}
          >
            <FaPlus className="mr-2" /> Add Service
          </button>
          <button
            className="flex items-center bg-secondary hover:bg-primary text-white px-4 py-2 rounded font-medium"
            onClick={handleExportLogs}
          >
            <FaDownload className="mr-2" /> Export Log
          </button>
          <button className="flex items-center bg-secondary hover:bg-primary text-white p-2 rounded">
            <FaExpand />
          </button>
        </div>
      </header>

      {/* Use the modal component */}
      <AddServiceModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Topbar;