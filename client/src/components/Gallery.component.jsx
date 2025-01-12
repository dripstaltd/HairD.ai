import SwatchItem from './Swatches.component';

export default function Gallery() {
  return (
    <div className="overflow-x-auto whitespace-nowrap p-4">
      <div className="inline-flex gap-4">
        <SwatchItem />
        <SwatchItem />
        <SwatchItem />
        <SwatchItem />
        <SwatchItem />
        <SwatchItem />
        <SwatchItem />
        <SwatchItem />
        <SwatchItem />
        <SwatchItem />
        <SwatchItem />
      </div>
    </div>
  );
}
