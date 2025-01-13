import './App.css';
import Upload from './components/Upload.component';
import { useState, useEffect } from 'react';
import analyse from './utils/analyse.util';
import AnalyseButton from './components/AnalyseButton.component';
import ToAnalyse from './components/ToAnalyse.component';
import Gallery from './components/Gallery.component';

function App() {
  const [hairData, setHairData] = useState([]);
  const [myBaseShade, setMyBaseShade] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

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

  // Show gallery only when base shade is generated
  useEffect(() => {
    if (myBaseShade !== null) {
      setShowGallery(true);
    }
  }, [myBaseShade]);

  return (
    <>
      <div className="p-4 w-96 m-auto">
        <Upload handleHairData={handleHairData} />
        <ToAnalyse hairData={hairData} />
        <AnalyseButton handleAnalyse={handleAnalyse} />
        {showGallery && <Gallery myBaseShade={myBaseShade} />}
      </div>
    </>
  );
}

export default App;
