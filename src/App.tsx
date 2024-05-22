import { useState, useEffect } from 'react';

function App() {
  const [serverValue, setServerValue] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fetching the value from the server
      const newValue = Math.random().toFixed(2);
      setServerValue(newValue);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div className='flex flex-col items-center p-10'>
      <div className='text-5xl text-center'>
        StressLess
      </div>
      <div className='text-2xl text-center'>
        A mental health app that helps you manage your stress
      </div>
      <div className='flex m-10 content-center justify-between'>
        <div>
          <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center">
            <div className="text-4xl">😊</div>
          </div>
        </div>
        <div>
          <div className="flex flex-row">
            <div className="flex flex-col justify-between items-end">
              <div className="text-lg">High</div>
              <div className="text-lg">Medium</div>
              <div className="text-lg">Low</div>
            </div>
            <div className="flex items-center justify-center">
              <input type="range" min="1" max="3" className="w-64" value={serverValue} onChange={(e) => setServerValue(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
