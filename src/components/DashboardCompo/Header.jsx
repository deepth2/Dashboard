import React from 'react';

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className="flex items-center justify-between bg-zinc-700 p-3 rounded-lg shadow-md">
      <div>
        <h1 className="text-lg text-gray-300">Hello</h1>
        <h2 className="text-2xl font-bold text-white mt-1">
          username <span className="text-emerald-400">👋</span>
        </h2>
      </div>
      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 transition text-sm font-semibold text-white px-5 py-2 rounded-md"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
