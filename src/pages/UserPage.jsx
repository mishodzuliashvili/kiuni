import { AnimatedPage } from "../components/AnimatedPage";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const UserPage = () => {
  const { user } = useSelector((state) => state.user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  // user plus data in redux store
  return (
    <AnimatedPage>
      <div>
        {user.email} {user.name}
      </div>
    </AnimatedPage>
  );
};
