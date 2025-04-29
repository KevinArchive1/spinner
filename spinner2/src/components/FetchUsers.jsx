import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';

const FetchUsers = () => {
  const dispatch = useDispatch();
  const { data: users, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Show spinner while loading
  if (status === 'loading') {
    return (
      <div className='flex flex-col justify-center items-center bg-white w-[300px] h-auto'>
        <img src="./images/loading.gif" alt="" />
        <h1>loading..</h1>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className='flex flex-col justify-center items-center bg-white w-[300px] h-auto'>
        <img src="./images/failed.gif" alt="" />
        <h1 className='text-red-900 font-bold'>Failed to load users.</h1>
      </div>
    );
  };
  

  return (
    <ul className='flex flex-col  gap-[10px] bg-white w-[300px] h-[250px] p-[1rem] rounded scrollbar-hide overflow-y-scroll'>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default FetchUsers;
