import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kiuImg from "./assets/kiu.jpg";
import penguinLogo from "./assets/penguin-logo.png";
import {
  faArrowAltCircleRight,
  faBell,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import {
  faArrowAltCircleLeft,
  faArrowRight,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div>
      <nav className="flex px-20 py-10 items-center gap-10 justify-between">
        <div className="flex items-center gap-10">
          <Link to="" className="font-bold text-xl">
            KIU Finder
          </Link>
          <Link to="" className="">
            Discover
          </Link>
          <Link to="" className="">
            Marketplace
          </Link>
          <Link to="" className="">
            How it Work
          </Link>
        </div>
        <div>
          <Link to="" className="border-2 rounded-full px-3 py-3">
            Connect Wallet
          </Link>
        </div>
      </nav>
      <div className="flex px-20 flex-col mt-10 gap-5">
        <p className="text-xl">
          <FontAwesomeIcon icon={faBolt} />{" "}
          <span className="font-semibold">Connected</span>
        </p>
        <p className="text-5xl leading-tight">
          A <span className="font-bold">New Way</span> To Meet <br />
          <span className="font-bold">People</span> At KIU.
        </p>
        <p className="text-tcolor_secondary w-2/5">
          Meet new people at <span className="text-tcolor font-bold">KIU</span>{" "}
          with our revolutionary app! Tell us a little about yourself and your
          interests, and we'll do the work of finding like-minded individuals
          for you. Say goodbye to endless searching and hello to meaningful
          connections!
        </p>
        <Link className="text-xl flex items-center gap-3 font-bold hover:underline duration-300">
          <span>Get Started</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
        <p className="mt-20 text-tcolor_secondary">
          Copyright @ 2023 - present, KIU Students
        </p>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="grid grid-cols-1 min-h-screen md:grid-cols-2">
//       <div className="p-10 flex flex-col gap-5 justify-between items-start">
//         <div className="flex flex-col gap-2 items-start">
// <h2 className="text-xl">
//   <span className="font-semibold">KIU</span>Finder
// </h2>
// <h1 className="text-3xl font-semibold">
//   A New Way To Meet People At KIU
// </h1>
// <p className="text-tcolor_secondary">
//   Looking for a new friend but don't have enough time to search? Look
//   no further than KIU Finder! With KIU Finder, you can simply tell us
//   a little about your personality and interests, and we will do the
//   job of finding the perfect people for you. Say goodbye to endless
//   searching and hello to meaningful connections!
// </p>
//           <button className="bg-[#a6adb5] text-white py-3 px-5 rounded-full">
//             GET STARTED
//           </button>
//         </div>
//         <p>Copyright @ 2023 - present, KIU Students</p>
//       </div>
//       <div>
//         <img
//           className="object-cover h-screen w-full rounded-l-3xl hidden md:block"
//           src={kiuImg}
//           alt=""
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
