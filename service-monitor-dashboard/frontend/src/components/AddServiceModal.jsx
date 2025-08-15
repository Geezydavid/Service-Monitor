import React from 'react';

const AddServiceModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-white">Add New Service</h2>
        <form>
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-white">Service Name *</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-secondary text-white placeholder-muted outline-none"
              placeholder="Enter service name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-white">Service Type</label>
            <select className="w-full px-4 py-2 rounded bg-secondary text-white outline-none">
              <option>Web Service</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-white">Description</label>
            <textarea
              className="w-full px-4 py-2 rounded bg-secondary text-white placeholder-muted outline-none"
              placeholder="Enter service description"
              rows={3}
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-white">Port</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-secondary text-white placeholder-muted outline-none"
              placeholder="e.g., 8080, 3306"
            />
          </div>
          <div className="mb-6 flex items-center">
            <input type="checkbox" className="mr-2" defaultChecked />
            <label className="font-semibold text-white">Enable Health Checks</label>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServiceModal;