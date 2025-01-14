/* eslint-disable react/prop-types */
import SwatchItem from './Swatches.component';

export default function Gallery({ myBaseShade, setTarget }) {
  // Calculate the number of swatches to render
  const shades = typeof myBaseShade === 'number' ? myBaseShade + 4 : 0; // Base shade + 4 levels of lift

  return (
    <div className="overflow-x-auto whitespace-nowrap p-4 flex flex-col gap-4">
      <h2 className="text-white btn text-lg">
        These levels of brightness have been generated just for you!
      </h2>
      <div className="inline-flex gap-4 justify-center">
        {Array.from({ length: shades }, (_, i) => (
          <div
            key={i}
            className="cursor-pointer"
            onClick={() => {
              setTarget(1);
            }}
          >
            <SwatchItem />
            <p className="text-lg neon">{i}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
