// Swatch component will display a list of hair color swatches.
import swatchShadowCard from '../assets/swatch_shadow_card.png';

export default function SwatchItem() {
  return (
    <>
      <img src={swatchShadowCard} className="bg-white" alt="" />
    </>
  );
}
