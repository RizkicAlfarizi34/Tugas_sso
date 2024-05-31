import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirecting = () => {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(null);
  
  useEffect(() => {
    if (confirmed === false) {
      localStorage.setItem('redirect', 'false');
      navigate('/login'); // Arahkan langsung ke halaman login jika pengguna memilih "No"
    } else if (confirmed === true) {
      localStorage.setItem('redirect', 'true');
      navigate('/dashboard'); // Arahkan ke halaman dashboard jika pengguna memilih "Yes"
    }

    

  }, [confirmed, navigate]);

  
  const handleConfirmation = (choice) => {
    setConfirmed(choice);

    
  };

  return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-cover" style={{ background: "url('../src/assets/p4.jpg')" }}>
      <div className="bg-slate-600 border border-slate-20 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-20 relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">Redirecting</h1>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="mt-4">Apakah ini Anda?</p>
            <div className="mt-4">
              <button onClick={() => handleConfirmation(true)} className="mr-4 bg-green-500 text-white px-4 py-2 rounded">Yes</button>
              <button onClick={() => handleConfirmation(false)} className="bg-red-500 text-white px-4 py-2 rounded">No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redirecting;
