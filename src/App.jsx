import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kiuImg from "./assets/kiu.jpg";
import penguinLogo from "./assets/penguin-logo.png";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
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
      <div className="flex px-20">
        <div className="flex flex-col gap-4 items-start">
          <h1 className="text-6xl font-bold">KIU Finder</h1>
          <p className="text-xl">
            Find your KIU friends and connect with them.
          </p>
          <Link
            to=""
            className="bg-primary text-white rounded-full px-5 py-3 uppercase font-semibold"
          >
            Get Started
          </Link>
        </div>
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
//           <h2 className="text-xl">
//             <span className="font-semibold">KIU</span>Finder
//           </h2>
//           <h1 className="text-3xl font-semibold">
//             A New Way To Meet People At KIU
//           </h1>
//           <p className="text-tcolor_secondary">
//             Looking for a new friend but don't have enough time to search? Look
//             no further than KIU Finder! With KIU Finder, you can simply tell us
//             a little about your personality and interests, and we will do the
//             job of finding the perfect people for you. Say goodbye to endless
//             searching and hello to meaningful connections!
//           </p>
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
