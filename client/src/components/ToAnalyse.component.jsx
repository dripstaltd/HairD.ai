/* eslint-disable react/prop-types */
export default function ToAnalyse({ hairData }) {
  return (
    <div className="flex flex-wrap gap-2 p-2 h-52 justify-around">
      <p>Processed Images</p>
      {hairData.map((data, index) => (
        <div key={index} className="">
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
