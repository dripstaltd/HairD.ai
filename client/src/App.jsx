import './App.css';
import Upload from './components/Upload.component';
import { useState } from 'react';
import analyse from './utils/analyse.util';
import AnalyseButton from './components/AnalyseButton.component';
import DisplayBaseShade from './components/DisplayBaseShade.component';
import ToAnalyse from './components/ToAnalyse.component';
import Gallery from './components/Gallery.component';

function App() {
  const [hairData, setHairData] = useState([]);
  const [myBaseShade, setMyBaseShade] = useState(Number);

  const handleHairData = (results) => {
    setHairData((prevResults) => [...prevResults, results]);
  };

  // Returns base shade
  const handleAnalyse = (e) => {
    e.preventDefault();
    const base = analyse(hairData);
    setMyBaseShade(() => base);
    setHairData([]);
  };

  return (
    <div className="grid grid-cols-10 grid-rows-10 h-screen">
      <div className="col-span-10 row-span-1 col-start-1 bg-slate-500">
        head
      </div>
      {/* Main body */}
      <div className="col-span-8 row-span-6 col-start-2 row-start-2 content-end pt-4 ">
        <div className="flex flex-col h-full bg-pink-400 rounded-t-lg">
          <Upload handleHairData={handleHairData} />
          <ToAnalyse hairData={hairData} />
        </div>
      </div>
      <div className="col-span-10 row-span-3 row-start-8 bg-zinc-700 overflow-y-hidden ">
        <DisplayBaseShade myBaseShade={myBaseShade} />
        <AnalyseButton handleAnalyse={handleAnalyse} />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
