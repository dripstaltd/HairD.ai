/* eslint-disable react/prop-types */
export default function ToAnalyse({ hairData }) {
  return (
    <div className="">
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
  );
}
