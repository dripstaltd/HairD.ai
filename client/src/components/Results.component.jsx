export default function Results(data) {
  const results = {
    dyed: false,
    base: '',
    undertone: '',
    target: '',
    levelsOfLift: '',
    developer: '',
  };

  const handleResults = () => {
    if (!data) return;

    results.base = data;
  };

  return (
    <>
      <div className="inset__dark flex flex-row justify-between p-4">
        <div>
          <p className="text-2xl flex text-white">Results:</p>
          <div className="inset__dark w-auto">
            <p>{data ? handleResults : 'Your results will appear here 😁'}</p>
          </div>
        </div>
        {/* Side bar */}
        <div className="card__dark flex flex-col divide-y divide-gray-800">
          <div className="p-3">export</div>
          <div className="p-3">save</div>
          <div className="p-3">share</div>
        </div>
      </div>
    </>
  );
}
