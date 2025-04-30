import React from 'react';
import UserForm from './components/userForm';
import UserList from './components/UserList';
import FetchUsers from './components/FetchUsers';
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full p-4 bg-no-repeat bg-cover" style={{ backgroundImage: `url("./images/bg.gif")` }}>
      <div className="flex flex-col gap-8 overflow-y-auto scrollbar-hide w-full items-center">
        
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl p-8 w-[90vw] max-w-[600px]">
          <h1 className="text-3xl font-extrabold text-slate-100 mb-4 border-b pb-2 w-full text-center">
            User Management
          </h1>
          <UserForm />
        </div>
        
        
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl p-8 w-[90vw] max-w-[600px]">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-b pb-2 w-full text-center">
            Fetched Users
          </h2>
          <FetchUsers />
        </div>
        
        
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl p-8 w-[90vw] max-w-[600px]">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-b pb-2 w-full text-center">
            Manually Added Users
          </h2>
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
