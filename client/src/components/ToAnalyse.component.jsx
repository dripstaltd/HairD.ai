/* eslint-disable react/prop-types */
export default function ToAnalyse({ hairData }) {
  return (
    <div className="flex flex-wrap gap-2 p-4 h-52 justify-around">
      <p className="neon text-lg">Processed Images</p>
      {hairData.map((data, index) => (
        <div key={index}>
          <img
            src={data.image_url}
            alt={`Uploaded ${index}`}
            className="w-14 h-14 rounded-sm"
          />
        </div>
      ))}
    </div>
  );
}
