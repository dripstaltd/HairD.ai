export default function DisplayBaseShade({ myBaseShade }) {
  return (
    <>
      <div className="bg-red-300">
        <h1 className="text-4xl">Your base shade is: {myBaseShade || ''}</h1>
      </div>
    </>
  );
}
