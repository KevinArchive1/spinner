// UserList.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../features/users/usersSlice';

const UserList = () => {
  const users = useSelector((state) => state.users.data); 
  const dispatch = useDispatch();

  return (
    <ul className='flex flex-col gap-[10px] bg-white w-[300px] h-[220px] p-[1rem]  rounded scrollbar-hide overflow-y-scroll'>
      {users.map((user) => (
        <li className='flex  items-center' key={user.id}>
          <button className='bg-red-500 font-bold text-white border border-black p-[6px] hover:bg-white hover:text-black' onClick={() => dispatch(deleteUser(user.id))}>
            Delete
          </button>
          <div className='flex justify-center w-full'>
            {user.name}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
