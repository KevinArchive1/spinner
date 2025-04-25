import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/users/usersSlice'; // Import addUser

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
    <div className=' border-[2px] border-black bg-green-400'>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button 
      className='text-center w-[6rem]'
      onClick={handleAdd} 
      disabled={!name.trim()}>
        Add User
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UserForm;
