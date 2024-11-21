'use client';
import React from 'react';
import {
  BarChart3,
  Users,
  PieChart,
  Home,
  ChevronLeft,
  Menu
} from 'lucide-react';
const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <div className={`min-h-screen bg-amber-900 text-yellow-300 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center justify-between p-4 border-b border-amber-800 text-200">
        <h2 className={`font-bold text-yellow-200 ${collapsed ? 'hidden' : 'block'}`}>Dashboard</h2>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-amber-800 text-yellow-200"
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      <nav className="p-3 mt-28">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center p-3 rounded-lg hover:bg-amber-500 transition-colors group font-bold text-500">
              <Home size={20} className="text-yellow-300 group-hover:text-yellow-200" />
              <span className={`ml-3 text-yellow-300 group-hover:text-yellow-200 ${collapsed ? 'hidden' : 'block'}`}>
                Overview
              </span>
            </a>
          </li>
          <br />
          <br />
          <br />
          <br />
          <br />
          <li>
            <a href="#" className="flex items-center p-3 rounded-lg hover:bg-amber-500 transition-colors group font-bold text-500">
              <BarChart3 size={20} className="text-yellow-300 group-hover:text-yellow-200" />
              <span className={`ml-3 text-yellow-300 group-hover:text-yellow-200 ${collapsed ? 'hidden' : 'block'}`}>
                Categories Chart
              </span>
            </a>
          </li>
          <br />
          <br />
          <br />
          <br />
          <br />

          <li>
            <a href="#" className="flex items-center p-3 rounded-lg hover:bg-amber-500 transition-colors group font-bold text-500">
              <PieChart size={20} className="text-yellow-300 group-hover:text-yellow-200" />
              <span className={`ml-3 text-yellow-300 group-hover:text-yellow-200 ${collapsed ? 'hidden' : 'block'}`}>
                User Charts
              </span>
            </a>
          </li>
          <br />
          <br />
          <br />
          <br />
          <br />

          <li>
            <a href="#" className="flex items-center p-3 rounded-lg hover:bg-amber-500 transition-colors group font-bold text-500">
              <Users size={20} className="text-yellow-300 group-hover:text-yellow-200" />
              <span className={`ml-3 text-yellow-300 group-hover:text-yellow-200 ${collapsed ? 'hidden' : 'block'}`}>
                Registered Users
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;