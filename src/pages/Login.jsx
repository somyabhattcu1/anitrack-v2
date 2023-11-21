import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const [error, setError] = useState('');
  const [value, setValue] = useState('');
  const { setToken } = useAppContext();

  const submitHandler = () => {
    // Check if input is not empty
    if (!value) {
      setError('Token Cannot Be Empty');
      return;
    }

    // Now let's suppose the user is entering the correct token

    // setting token
    setToken(value);
    // setting local storage
    localStorage.setItem('accessToken', value);
  };

  useEffect(() => {
    // Check if token is already present in local storage
    const token = localStorage.getItem('accessToken');
    if (token) {
      setToken(token);
    }
  }, [value]);

  return (
    <div className="bg-darkGrey border border-solid border-black m-6 max-w-[350px] p-4 max-h-[500px] flex justify-center items-center">
      <div className="text-black p-3 flex flex-col justify-center gap-2">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-white border-b-2 pb-2">Login AniList</h1>
          <p className="text-white mb-1">
            Click <a className="underline font-bold" href="https://www.google.com" target="_blank" rel="noopener noreferrer">here</a> to start the authorization process. You will be
            redirected to your default browser. After authorization, AniList
            will give you a token; copy and paste that below to complete the linking.
          </p>
        </div>
          <div className="flex justify-center flex-col gap-2">
            <input
              className=" bg-midGrey p-2 text-white outline-none rounded-sm"
              type="text"
              placeholder="Paste Token Here"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={submitHandler} className="bg-btnColor text-white p-2">Submit</button>
            {error && <p className="text-red-500">* {error}</p>}
          </div>
      </div>
    </div>
  );
};

export default Login;
