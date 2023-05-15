import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kiuImg from "../assets/kiu.jpg";
import { Link, Navigate } from "react-router-dom";
import { faArrowRight, faBolt } from "@fortawesome/free-solid-svg-icons";
import { AnimatedPage } from "../components/AnimatedPage";
import { useSelector } from "react-redux";

const Landing = () => {
  const { user } = useSelector((state) => state.user);

  if (user) {
    return <Navigate to="/user" />;
  }
  return (
    <AnimatedPage>
      <div className="grid md:grid-cols-2 pt-20 gap-10 relative overflow-hidden">
        <div className="flex flex-col gap-5">
          <p className="text-xl">
            <FontAwesomeIcon icon={faBolt} />{" "}
            <span className="font-semibold">Connected</span>
          </p>
          <p className="text-5xl leading-tight">
            A <span className="font-bold">New Way</span> To Meet <br />
            <span className="font-bold">People</span> At KIU.
          </p>
          <p className="text-tcolor_secondary ">
            Meet new people at{" "}
            <span className="text-tcolor font-bold">KIU</span> with our
            revolutionary app! Tell us a little about yourself and your
            interests, and we will do the work of finding like-minded
            individuals for you. Say goodbye to endless searching and hello to
            meaningful connections!
          </p>
          <Link className="text-xl flex items-center gap-3 font-bold hover:underline duration-300">
            <span>Get Started</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <p className="mt-20 text-tcolor_secondary">
            Copyright @ 2023 - present, KIU Students
          </p>
        </div>
        <img
          className="border border-[#ffffff41] p-5 w-full object-cover object-top h-[450px] hidden md:block "
          src={kiuImg}
          alt=""
        />
      </div>
    </AnimatedPage>
  );
};

export default Landing;
