import React from "react";
import { useAppStore } from "../store";

const Header = () => {
  const { username, setUsername } = useAppStore(({ username, setUsername }) => {
    return {
      username,
      setUsername,
    };
  });
  return (
    <header className="h-16 bg-slate-800 text-white w-full px-4">
      <nav className="w-full h-full flex justify-between items-center">
        <div className="logo">Quiz App React</div>
        <div className="flex gap-4 items-center">
          <div className="profile">{username}</div>
          {username && (
            <button
              onClick={() => {
                setUsername(null);
              }}
              className="px-3 text-slate-900 py-1 5 flex items-center justify-center"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
