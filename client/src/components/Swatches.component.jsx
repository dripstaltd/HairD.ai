// Swatch component will display a list of hair color swatches.
import swatchShadowCard from '../assets/swatch.png';

export default function SwatchItem() {
  return (
    <>
      <img className="w-24 content-center" src={swatchShadowCard} />
    </>
  );
}
