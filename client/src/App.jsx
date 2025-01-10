import './App.css';
import Upload from './components/Upload.component';
import { useState } from 'react';

function App() {
  const [hairData, setHairData] = useState([]);

  const handleHairData = (results) => {
    setHairData((prevResults) => [...prevResults, results]);
  };
  return (
    <>
      <div className="p-20 h-screen flex flex-col">
        <Upload handleHairData={handleHairData} />
        <div className="flex gap-6 justify-center outline-dashed h-40">
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
