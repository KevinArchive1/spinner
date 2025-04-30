import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';

const FetchUsers = () => {
  const dispatch = useDispatch();
  const { data: users, status, error } = useSelector((state) => state.users);
  const [delayComplete, setDelayComplete] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());

    const timer = setTimeout(() => {
      setDelayComplete(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  const isLoading = status === 'loading' || !delayComplete;

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center bg-white border border-gray-300 shadow-md rounded w-full h-[250] p-4">
        <img src="./images/loading.gif" alt="Loading animation" className="w-full h-[250]" />
        <h1 className="text-gray-700 font-medium mt-2">Loading users...</h1>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex flex-col justify-center items-center bg-white border border-red-300 shadow-md rounded w-full h-[500px] p-4">
        <img src="./images/failed.gif" alt="Error loading" className="w-[80%] h-auto" />
        <h1 className="text-red-800 font-bold mt-2">Failed to load users.</h1>
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center bg-white border border-gray-300 shadow-md rounded w-full h-[500px] p-4">
        <p className="text-gray-600">No users found.</p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-2 bg-white border border-gray-300 shadow-md rounded w-full h-[500px] p-4 overflow-y-auto scrollbar-hide">
      {users.map((user) => (
        <li
            key={user.id}
            className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition duration-200"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="text-gray-800 font-medium">{user.name}</span>
          </li>

                ))}
    </ul>
  );
};

export default FetchUsers;
