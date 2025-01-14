/* eslint-disable react/prop-types */
export default function Results({ target, myBaseShade }) {
  const renderResults = () => {
    if (target === null) {
      return <p>Pending...</p>;
    }

    return (
      <>
        <p>Hair being Natural: True</p>
        <p>Base hair: {myBaseShade}</p>
        <p>Target level: {target + 1}</p>
        <p>Levels of lift: {myBaseShade - (target + 1)}</p>
        <p>Developer required: %</p>
        <br />
        <p className="text-gray-400 italic">
          Based on your hair not having previously been dyed.
        </p>
      </>
    );
  };

  const handleDiscordClick = () => {
    window.open(
      'https://discord.gg/qqXXekcHrQ',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="flex flex-row justify-between p-8">
      <div className="">
        <p className="text-lg flex neon">Results:</p>
        <div className="text-left text-white">{renderResults()}</div>
      </div>
      <div className="card__dark flex flex-col divide-y divide-gray-800 h-fit cursor-pointer">
        <div className="p-3 neon">export</div>
        <div className="p-3 neon">Try On</div>
        <div className="p-3" onClick={handleDiscordClick}>
          suggestions
        </div>
      </div>
    </div>
  );
}
