import React from 'react';

const logs = [
  { time: '2024-04-24 13:45:01', msg: 'Server started' },
  { time: '2024-04-24 13:45:15', msg: 'Incoming request processed' },
  { time: '2024-04-24 13:45:15', msg: 'For instant updates' },
];

const errors = [
  { time: '2024-04-24 13:42:11', msg: 'Timeout error' },
  { time: '2024-04-24 13:41:55', msg: 'Connection error' },
  { time: '2024-04-24 13:41:55', msg: 'Request failed' },
];

const RightSidebarWidgets = () => (
  <aside className="w-80 bg-accent p-6 flex flex-col space-y-6">
    <div>
      <h3 className="font-semibold mb-2">Live Logs</h3>
      <div className="bg-secondary rounded p-3 h-32 overflow-y-auto text-sm space-y-1">
        {logs.map((log, idx) => (
          <div key={idx} className="text-muted">
            <span className="text-xs">{log.time} - </span>
            <span>{log.msg}</span>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h3 className="font-semibold mb-2">Error History</h3>
      <div className="bg-secondary rounded p-3 h-32 overflow-y-auto text-sm space-y-1">
        {errors.map((err, idx) => (
          <div key={idx} className="text-muted">
            <span className="text-xs">{err.time} - </span>
            <span>{err.msg}</span>
          </div>
        ))}
      </div>
    </div>
  </aside>
);

export default RightSidebarWidgets;