import SwatchItem from './Swatches.component';

// There are 10 levels of lift
// if you lift by 1 level
// if you lift by 2 level
// if you lift by 3 level
// if you lift by 4 level

// pass the level of lift back
/*

  INFO INCLUDES:
  Based on ->
  Hair being natural: True
  Base hair: 6
  Base hair undertone: Orange
  Target Brightness Level: 7
  Levels of Lift: 1
  Developer: 3%  / 10 vol
  */

export default function Gallery({ myBaseShade }) {
  // Calculate the number of swatches to render
  const shades = typeof myBaseShade === 'number' ? myBaseShade + 4 : 0; // Base shade + 4 levels of lift

  return (
    <div className="overflow-x-auto whitespace-nowrap p-4">
      <div className="inline-flex gap-4">
        {Array.from({ length: shades }, (_, i) => (
          <SwatchItem key={i} />
        ))}
      </div>
    </div>
  );
}
