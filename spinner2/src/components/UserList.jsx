import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../features/users/usersSlice';

const UserList = () => {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  return (
    <ul className="flex flex-col gap-3 bg-white w-full h-[500px] p-4 rounded shadow-md overflow-y-auto scrollbar-hide">
      {users.map((user) => (
        <li
          key={user.id}
          className="flex items-center justify-between bg-gray-100 rounded-lg p-3 shadow-sm hover:bg-gray-200 transition duration-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="text-gray-800 font-medium">{user.name}</span>
          </div>
          <button
            onClick={() => dispatch(deleteUser(user.id))}
            className="bg-red-500 text-white font-semibold px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
