import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
// import defaultImg from "../../assets/profile.png";
import { useSelector } from "react-redux";
import { auth, db } from "../firebase";
import { Loader } from "../components/Loader";
import { AnimatedPage } from "../components/AnimatedPage";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => state.user);

  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  if (user) {
    return <Navigate to="/user" />;
  }
  if (loading) {
    return <Loader />;
  }
  async function createUser() {
    await createUserWithEmailAndPassword(email, password);
    try {
      await setDoc(doc(db, "users", email), {
        name,
        dateJoined: new Date().toISOString(),
        bio: "This is short bio",
        rank: 0,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <AnimatedPage>
      <div className="p-5 flex flex-col gap-3 items-start">
        <h2 className="font-medium text-2xl">
          Create new account<span className="text-">.</span>
        </h2>
        <p className="text-tsecondary">
          Already A Member?{" "}
          <Link to="/login" className="underline hover:no-underline">
            Log In
          </Link>
        </p>
        {error ? <div className="text-red-300">{error.message}</div> : null}
        <input
          className="border border-secondary p-3 bg-transparent outline-none max-w-xs w-full"
          placeholder="Please enter your nickname..."
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border border-secondary p-3 bg-transparent outline-none max-w-xs w-full"
          placeholder="Please enter your email..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border border-secondary p-3 bg-transparent outline-none max-w-xs w-full"
          placeholder="Please enter your password..."
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="border border-secondary p-3 px-5 bg-secondary font-medium outline-none max-w-xs hover:opacity-70 duration-300"
          onClick={createUser}
        >
          Sign Up
        </button>
      </div>
    </AnimatedPage>
  );
};
