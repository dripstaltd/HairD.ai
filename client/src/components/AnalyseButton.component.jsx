/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function AnalyseButton({ handleAnalyse }) {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = (e) => {
    handleAnalyse(e);

    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 4000);
  };

  return (
    <button
      onClick={handleButtonClick}
      className={` text-white w-full p-2 mt-4 ${
        isActive ? 'inset__dark' : 'card__dark'
      }`}
      type="button"
    >
      <span>Step 2:</span> <span className="neon">Analyse Images</span>
    </button>
  );
}
