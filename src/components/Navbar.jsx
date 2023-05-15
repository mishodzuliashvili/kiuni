import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function Navbar() {
  const { user } = useSelector((state) => state.user);
  const [signOut, loading, error] = useSignOut(auth);
  return (
    <nav className="flex items-center gap-10 justify-between">
      <div className="flex items-center gap-10">
        <Link to="" className="font-bold text-xl">
          KIU Finder
        </Link>
        <Link to="/discover" className="hidden md:block">
          Discover
        </Link>
      </div>
      {user && (
        <button
          onClick={signOut}
          className="border border-[#ffffff41] font-semibold px-5 py-3 hover:bg-[#93939344] duration-300"
        >
          Log Out
        </button>
      )}
      {!user && (
        <Link
          to="/login"
          className="border border-[#ffffff41] font-semibold px-5 py-3 hover:bg-[#93939344] duration-300"
        >
          Log in
        </Link>
      )}
    </nav>
  );
}
