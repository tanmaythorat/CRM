import React from 'react';
import { Menu, Plus, Search, Bell, Settings, ChevronDown, Users2, Calendar, Layout, HelpCircle, Home, Clock, Inbox } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Main Navigation */}
      <div className="h-14 px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Home className="w-5 h-5 text-gray-500" />
          </button>
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          <div className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 p-1.5 rounded-lg transition-colors">
            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=32&h=32&fit=crop"
              alt="Workspace"
              className="w-6 h-6 rounded"
            />
            <span className="text-sm font-medium text-gray-700">My Workspace</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Center Section */}
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <Clock className="w-4 h-4" />
            <span>Recent</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <Inbox className="w-4 h-4" />
            <span>Inbox</span>
          </button>
          <div className="relative group">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2" />
            <input
              type="text"
              placeholder="Search Everything"
              className="pl-9 pr-4 py-1.5 bg-gray-100 text-sm rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
            />
            <div className="hidden group-focus-within:block absolute top-full left-0 w-full mt-1 p-2 bg-white rounded-lg shadow-lg border border-gray-200">
              <div className="text-xs text-gray-500 px-2 pb-2">RECENT SEARCHES</div>
              <div className="text-sm text-gray-400 text-center py-8">No recent searches</div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-gray-500" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <HelpCircle className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-gray-500" />
          </button>
          <div className="h-6 w-px bg-gray-300"></div>
          <button className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 rounded-lg transition-colors">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
              alt="Profile"
              className="w-6 h-6 rounded-full"
            />
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="h-12 px-4 flex items-center space-x-6 border-t border-gray-200">
        <button className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Layout className="w-4 h-4" />
          <span>Boards</span>
        </button>
        <button className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Users2 className="w-4 h-4" />
          <span>Team</span>
        </button>
        <button className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Calendar className="w-4 h-4" />
          <span>Calendar</span>
        </button>
        <button className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add View</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;