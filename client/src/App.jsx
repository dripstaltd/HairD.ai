import './App.css';
import Upload from './components/Upload.component';
import { useState } from 'react';
import analyse from './utils/analyse.util';

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
    <>
      <div className="p-20 h-screen flex flex-col">
        <h1 className="font-bold text-5xl p-4">Upload</h1>
        <h1 className=" text-3xl  text-gray-500">
          Your base shade is: {myBaseShade || ''}
        </h1>
        <Upload handleHairData={handleHairData} />
        <button
          onClick={handleAnalyse}
          className="px-6 py-3.5 text-base font-medium text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
          type="button"
        >
          Analyse
        </button>
        <div className="flex gap-6 justify-center h-40">
          {hairData.map((data, index) => (
            <div key={index} className="">
              <img
                src={data.image_url}
                alt={`Uploaded ${index}`}
                className="w-32 rounded-lg"
              />
              <p>Base Shade: {data.base_shade}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
