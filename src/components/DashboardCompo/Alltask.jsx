import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function AllTask() {
  const { employees, userData } = useContext(AuthContext);

  return (
    <div className="bg-zinc-900 p-6 rounded-xl mt-6 shadow-lg text-white">
      <div className="grid grid-cols-5 gap-4 bg-emerald-600 py-3 px-5 rounded-lg mb-4">
        <h2 className="text-base font-semibold text-white">Employee</h2>
        <h2 className="text-base font-semibold text-white text-center">New</h2>
        <h2 className="text-base font-semibold text-white text-center">Active</h2>
        <h2 className="text-base font-semibold text-white text-center">Completed</h2>
        <h2 className="text-base font-semibold text-white text-center">Failed</h2>
      </div>

      <div className="space-y-3">
        {Array.isArray(userData) ? userData.map((elem, idx) => (
          <div key={idx} className="grid grid-cols-5 gap-4 bg-zinc-800 hover:bg-zinc-700 transition py-3 px-5 rounded-lg">
            <p className="text-sm font-medium">{elem.firstName}</p>
            <p className="text-sm font-semibold text-blue-400 text-center">{elem.taskCounts?.newTask ?? 0}</p>
            <p className="text-sm font-semibold text-yellow-400 text-center">{elem.taskCounts?.active ?? 0}</p>
            <p className="text-sm font-semibold text-green-400 text-center">{elem.taskCounts?.completed ?? 0}</p>
            <p className="text-sm font-semibold text-red-500 text-center">{elem.taskCounts?.failed ?? 0}</p>
          </div>
        )) : (
          <p className="text-gray-400">No employee data available.</p>
        )}
      </div>
    </div>
  );
}

export default AllTask;
