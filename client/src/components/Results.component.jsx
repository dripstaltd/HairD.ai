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
    return (
      <>
        <p>Hair being Natural: True</p>
        <p>Base hair: </p>
        <p>Base hair undertones: </p>
        <p>Target level: </p>
        <p>Levels of lift: </p>
        <p>Developer require: %</p>
        <br></br>
        <p className="text-gray-400 italic">
          Based on your hair not having previously been dyed.
        </p>
      </>
    );
  };

  return (
    <>
      <div className="flex flex-row justify-between p-4">
        <div>
          <p className="text-2xl flex text-white">Results:</p>
          <div className="text-left text-white p-4">{handleResults()}</div>
        </div>
        {/* Side bar */}
        <div className="card__dark flex flex-col divide-y divide-gray-800 h-fit cursor-pointer">
          <div className="p-3">export</div>
          <div className="p-3">save</div>
          <div className="p-3">share</div>
        </div>
      </div>
    </>
  );
}
