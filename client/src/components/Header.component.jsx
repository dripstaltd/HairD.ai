import logo from '../assets/HairDai_light_svg.svg';

export default function Header() {
  return (
    <div className="h-full align-center flex">
      <div
        id="logo"
        className="m-auto inset__dark p-2 w-40 justify-center text-center content-center"
      >
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
