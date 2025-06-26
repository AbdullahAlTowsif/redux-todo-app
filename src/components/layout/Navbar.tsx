import Logo from "@/assets/Logo";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5">
      <div className="flex items-center">
        <Logo /> <span className="font-bold ml-2">Task Master</span>
      </div>
      <div className="space-x-5">
        <Link to="/">Tasks</Link>
        <Link to="/users">Users</Link>
      </div>
      <div className="ml-auto">
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
};

export default Navbar;
