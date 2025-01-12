/* eslint-disable react/prop-types */

export default function AnalyseButton({ handleAnalyse }) {
  return (
    <button
      onClick={handleAnalyse}
      className="py-3.5 w-60 text-base font-medium rounded-sm text-center bg-slate-700 text-white"
      type="button"
    >
      Analyse
    </button>
  );
}
