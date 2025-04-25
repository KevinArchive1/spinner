import React from 'react';
import UserForm from './components/userForm';
import UserList from './components/UserList';
import FetchUsers from './components/FetchUsers';

function App() {
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw] bg-gray-400 ">
      <div className='flex flex-col  items-center h-[95%] w-[40%] gap-[2rem]  border border-black rounded-xl bg-orange-200 '>
        <div>
          <h1 className='text-[2rem] font-bold'>User Management</h1>
          <UserForm />
        </div>
        <div >
          <h2 className='text-[1.5rem]  font-bold'>Fetched Users</h2>
          <FetchUsers />
        </div>
        <div >
          <h2 className='text-[1.5rem] font-bold'>Manually Added Users</h2>
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default App;

