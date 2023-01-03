import { Link } from "react-router-dom";
import { WiStars } from "react-icons/wi";

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/Work">Work</Link>
      <Link to="About">About</Link>
      <WiStars />
    </>
  );
};
export default Navbar;
