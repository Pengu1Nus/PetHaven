import Navbar from '@/scenes/navbar';
import {useState} from 'react';

function App() {
  const [selectedPage, setSelectedPage] = useState<string>('donations');
  return <div className="app bg-gray-20">
    <Navbar 
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
  </div>;
}

export default App;
