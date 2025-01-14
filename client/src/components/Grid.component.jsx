export default function Grid(
  header,
  upload,
  analyseBtn,
  results,
  main,
  gallery,
  guide,
  details
) {
  return (
    <div className="grid grid-cols-12 grid-rows-8 gap-4 p-8 pt-0 select-none">
      <div className="col-span-12">{header}</div>
      <div className="col-span-3 row-span-7 row-start-2">
        {upload}
        {analyseBtn}
      </div>
      <div className="inset__dark h-full w-full col-span-3 row-span-3 col-start-10 row-start-2">
        {results}
      </div>
      {/* Processed images area */}
      <div className=" inset__dark h-full w-full col-span-6 row-span-3 col-start-4 row-start-2">
        {main}
      </div>
      {/* Gallery Swatches */}
      <div className="h-full w-full col-span-6 row-span-2 col-start-4 row-start-5">
        {gallery}
      </div>
      {/* Quick Start Guide */}
      <div className="card__dark h-full w-full col-span-6 row-span-2 col-start-4 row-start-7">
        {guide}
      </div>
      {/* Further Details */}
      <div className="inset__dark h-full w-full col-span-3 row-span-4 col-start-10 row-start-5">
        {details}
      </div>
    </div>
  );
}
