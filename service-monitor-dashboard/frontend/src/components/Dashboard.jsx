import React from 'react';

const services = [
	{
		name: 'web-server',
		status: 'Running',
		cpu: 77,
		memory: 62,
		uptime: 100,
	},
	{
		name: 'database',
		status: 'Stopped',
		unhealthy: true,
		cpu: 32,
		memory: 64,
		uptime: 99,
	},
	{
		name: 'cache',
		status: 'Running',
		cpu: 63,
		memory: 72,
		uptime: 100,
	},
	{
		name: 'worker',
		status: 'Stopped',
		cpu: 99,
		memory: 42,
		uptime: 70,
	},
];

const statusColor = (status, unhealthy) => {
	if (unhealthy) return 'bg-unhealthy';
	if (status === 'Running') return 'bg-running';
	if (status === 'Stopped') return 'bg-stopped';
	return 'bg-muted';
};

const Dashboard = () => (
	<main className="flex-1 p-8 overflow-y-auto">
		<div className="grid grid-cols-2 gap-6">
			{services.map((svc, idx) => (
				<div
					key={idx}
					className="bg-secondary rounded-lg p-6 shadow flex flex-col min-w-[250px]"
				>
					<div className="flex items-center justify-between mb-2">
						<span className="font-semibold text-lg">{svc.name}</span>
						<div className="flex space-x-2">
							<span
								className={`px-3 py-1 rounded text-xs font-bold ${statusColor(
									svc.status,
									svc.unhealthy
								)} text-white`}
							>
								{svc.status}
							</span>
							{svc.unhealthy && (
								<span className="px-3 py-1 rounded text-xs font-bold bg-unhealthy text-white">
									Unhealthy
								</span>
							)}
						</div>
					</div>
					<div className="mb-2">
						<div className="flex justify-between text-muted text-sm">
							<span>CPU</span>
							<span>{svc.cpu} %</span>
						</div>
						<div className="w-full h-2 bg-border rounded mt-1 mb-2">
							<div
								className="h-2 bg-blue-500 rounded"
								style={{ width: `${svc.cpu}%` }}
							/>
						</div>
						<div className="flex justify-between text-muted text-sm">
							<span>Memory</span>
							<span>{svc.memory} %</span>
						</div>
						<div className="w-full h-2 bg-border rounded mt-1 mb-2">
							<div
								className="h-2 bg-blue-500 rounded"
								style={{ width: `${svc.memory}%` }}
							/>
						</div>
						<div className="flex justify-between text-muted text-sm">
							<span>Uptime</span>
							<span>{svc.uptime} %</span>
						</div>
					</div>
					<div className="flex space-x-2 mt-4">
						<button className="bg-secondary border border-border text-muted px-3 py-1 rounded hover:bg-primary hover:text-white">
							Start
						</button>
						<button className="bg-secondary border border-border text-muted px-3 py-1 rounded hover:bg-primary hover:text-white">
							Stop
						</button>
						<button className="bg-secondary border border-border text-muted px-3 py-1 rounded hover:bg-primary hover:text-white">
							Restart
						</button>
					</div>
				</div>
			))}
		</div>
	</main>
);

export default Dashboard;