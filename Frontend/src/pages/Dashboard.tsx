import React, { useState } from 'react';
import { Plus, MoreHorizontal, Layout, Users2, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';

function Dashboard() {
  const [boards] = useState([
    {
      id: 1,
      name: 'Q1 Marketing Campaign',
      tasks: [
        { id: 1, title: 'Social Media Strategy', status: 'In Progress', owner: 'Sarah K', dueDate: '2024-03-25' },
        { id: 2, title: 'Content Calendar', status: 'Planning', owner: 'Mike R', dueDate: '2024-03-20' },
        { id: 3, title: 'Email Newsletter', status: 'Done', owner: 'John D', dueDate: '2024-03-15' },
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-104px)]">
          <div className="p-4">
            <button className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center justify-center space-x-2 hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              <span>Add</span>
            </button>
          </div>
          <div className="space-y-1 px-2">
            {['Boards', 'Dashboard', 'Calendar', 'Team'].map((item, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center space-x-3"
              >
                {index === 0 && <Layout className="w-4 h-4 text-gray-600" />}
                {index === 1 && <Users2 className="w-4 h-4 text-gray-600" />}
                {index === 2 && <Calendar className="w-4 h-4 text-gray-600" />}
                {index === 3 && <Users2 className="w-4 h-4 text-gray-600" />}
                <span className="text-gray-700">{item}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Board Content */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">My Boards</h1>
          </div>

          {/* Board Table */}
          <div className="bg-white rounded-lg shadow">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-800">{boards[0].name}</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {boards[0].tasks.map((task) => (
                    <tr key={task.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{task.title}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${task.status === 'Done' ? 'bg-green-100 text-green-800' : 
                            task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                            'bg-yellow-100 text-yellow-800'}`}>
                          {task.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{task.owner}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{task.dueDate}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-400 hover:text-gray-500">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;