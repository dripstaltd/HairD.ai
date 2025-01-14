// Swatch component will display a list of hair color swatches.
import base0 from '../assets/swatches/base0.png';
import base1 from '../assets/swatches/base1.png';
import base2 from '../assets/swatches/base2.png';
import base3 from '../assets/swatches/base3.png';
import base4 from '../assets/swatches/base4.png';
import base5 from '../assets/swatches/base5.png';
import base6 from '../assets/swatches/base6.png';
import base7 from '../assets/swatches/base7.png';
import base8 from '../assets/swatches/base8.png';
import base9 from '../assets/swatches/base9.png';

export default function SwatchItem({ level }) {
  const swatches = {
    0: base0,
    1: base1,
    2: base2,
    3: base3,
    4: base4,
    5: base5,
    6: base6,
    7: base7,
    8: base8,
    9: base9,
  };

  const imageSrc = swatches[level];

  if (!imageSrc) {
    console.error(`No swatch found for level ${level}`);
    return <div className="w-24 h-24 bg-gray-800">Missing Image</div>;
  }

  return (
    <>
      <img
        className="w-24 content-center"
        src={imageSrc}
        alt={`Swatch level ${level}`}
      />
    </>
  );
}
