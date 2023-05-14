import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { login } from "./userSlice";
import { Loading } from "./components/Loading";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(login(null));
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [dispatch]);
  if (loading) return <Loading />;
  return (
    <div className="px-10 py-10 md:px-20 md:py-10">
      <Navbar />
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
    </div>
  );
}

export default App;
