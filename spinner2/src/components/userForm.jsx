import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/users/usersSlice';

const UserForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim()) {
      dispatch(addUser({ name }));
      setName('');
      setError('');
    } else {
      setError('Please enter a valid name.');
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4 w-full bg-white border border-gray-300 rounded shadow-md">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleAdd}
        disabled={!name.trim()}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
      >
        Add User
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default UserForm;
