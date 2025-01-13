/* eslint-disable react/prop-types */

export default function AnalyseButton({ handleAnalyse }) {
  return (
    <button
      onClick={handleAnalyse}
      className="inset__dark neon w-full p-2 mt-4"
      type="button"
    >
      Analyse
    </button>
  );
}
