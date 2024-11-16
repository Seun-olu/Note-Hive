import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing menu and close icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the sidebar is open or closed

  return (
    <div>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 p-2 bg-primary text-white rounded-full z-50 transition-all duration-300"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-46 z-40 bg-darkSecondary text-textLight transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="mt-16 space-y-4 px-6 py-4">
          {/* Sidebar Links */}
          <li>
            <Link
              to="/"
              className="text-lg hover:bg-primary hover:text-white p-2 rounded-md transition-colors block"
              onClick={() => setIsOpen(false)} // Close sidebar on navigation
            >
              All Notes
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="text-lg hover:bg-primary hover:text-white p-2 rounded-md transition-colors block"
              onClick={() => setIsOpen(false)}
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              to="/deleted"
              className="text-lg hover:bg-primary hover:text-white p-2 rounded-md transition-colors block"
              onClick={() => setIsOpen(false)}
            >
              Deleted Notes
            </Link>
          </li>
          <li>
            <Link
              to="/create-folder"
              className="text-lg hover:bg-primary hover:text-white p-2 rounded-md transition-colors block"
              onClick={() => setIsOpen(false)}
            >
              Create Folder
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
