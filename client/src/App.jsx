import './App.css';
import Upload from './components/Upload.component';
import { useState, useEffect } from 'react';
import analyse from './utils/analyse.util';
import AnalyseButton from './components/AnalyseButton.component';
import ToAnalyse from './components/ToAnalyse.component';
import Gallery from './components/Gallery.component';
import Results from './components/Results.component';
import Grid from './components/Grid.component';
import Header from './components/Header.component';
import Details from './components/Details.component';
import Guide from './components/Guide.component';

function App() {
  const [hairData, setHairData] = useState([]);
  const [myBaseShade, setMyBaseShade] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [target, setTarget] = useState(null);

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
      {Grid(
        <Header />, // header
        <Upload handleHairData={handleHairData} />, //left panel upload
        <AnalyseButton handleAnalyse={handleAnalyse} />, // Button in upload area of grid
        <Results target={target} myBaseShade={myBaseShade} />, // results
        <ToAnalyse hairData={hairData} />, // Processed Images area / Main
        showGallery && (
          <Gallery setTarget={setTarget} myBaseShade={myBaseShade} /> // Swatches Gallery
        ),
        <Guide />, // Guide
        target ? <Details target={target} /> : ''
      )}
    </>
  );
}

export default App;
