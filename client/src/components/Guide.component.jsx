export default function Guide() {
  return (
    <div id="guide" className="p-8 flex flex-row justify-between text-left">
      <div>
        <h2 className="neon text-lg">Steps:</h2>
        <p className="text-white">
          Step 1: Upload up to 20 images of your hair
        </p>
        <p className="text-white">
          Step 2: Press &apos;Process Images&apos; Button to upload
        </p>
        <p className="text-white">
          Step 3: Press &apos;Analyse&apos; Button which does the magic
        </p>
        <p className="text-white">
          Step 4: Select any color level, these are generated for you!
        </p>
      </div>
      <div>
        <h2 className="neon text-lg">For Best Results:</h2>
        <p className="text-white">Make sure to center you hair in the images</p>
        <p className="text-white">to insure good results also make sure you</p>
        <p className="text-white">
          have adequet lighting, natural light is best!
        </p>
      </div>
    </div>
  );
}
