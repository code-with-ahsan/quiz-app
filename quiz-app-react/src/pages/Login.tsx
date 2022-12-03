import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store";

const Login = () => {
  const [username, setUsername] = useState("");
  const setUserNameInState = useAppStore((state) => state.setUsername);
  const isLoggedIn = useAppStore((state) => !!state.username);
  const navigate = useNavigate();
  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    setUserNameInState(username);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div className="max-w-md mx-auto my-16">
      <div className="rounded-md shadow-md bg-white p-4">
        <h1 className="text-2xl mb-4">Login</h1>
        <form
          onSubmit={onFormSubmit}
          className="flex gap-4 flex-col justify-end"
        >
          <input
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            placeholder="Enter your name. We super secure! ⚠"
            className="w-full sm:flex items-center text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
          />
          <button className="px-3 py-1 5 flex items-center justify-center">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
