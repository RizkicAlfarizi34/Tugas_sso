import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirecting = () => {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(null);

  const handleConfirmation = (choice) => {
    setConfirmed(choice);
    if (choice) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-cover" style={{ "background": "url('../src/assets/p4.jpg')" }}>
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <p className="mt-4">apakah ini anda?</p>
        <div className="mt-4">
          <button onClick={() => handleConfirmation(true)} className="mr-4 bg-green-500 text-white px-4 py-2 rounded">Yes</button>
          <button onClick={() => handleConfirmation(false)} className="bg-red-500 text-white px-4 py-2 rounded">No</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Redirecting;
