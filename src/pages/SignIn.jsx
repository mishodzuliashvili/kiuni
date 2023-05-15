import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../firebase";
import { AnimatedPage } from "../components/AnimatedPage";
import { useSelector } from "react-redux";
import { Loader } from "../components/Loader";
export const SignIn = () => {
  const { user } = useSelector((state) => state.user);
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        await signInWithEmailAndPassword(values.email, values.password);
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  if (user) {
    return <Navigate to="/user" />;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <AnimatedPage>
      <form
        onSubmit={formik.handleSubmit}
        className="pt-20 flex flex-col gap-5 items-start"
      >
        <h2 className="font-bold text-3xl">Login to Your Account</h2>
        <p className="text-tsecondary">
          Do not have an account?{" "}
          <Link to="/register" className="underline hover:no-underline">
            Create an account
          </Link>
        </p>
        {error ? <div className="text-red-300">{error.message}</div> : null}
        <input
          className="border border-[#ffffff5f] p-3 bg-transparent outline-none max-w-xs w-full"
          placeholder="Please enter your email..."
          type="email"
          name="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <p>{formik.errors.email}</p>
        )}
        <input
          className="border border-[#ffffff5f] p-3 bg-transparent outline-none max-w-xs w-full"
          placeholder="Please enter your password..."
          type="password"
          value={formik.values.password}
          name="password"
          onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password && (
          <p>{formik.errors.password}</p>
        )}
        <button
          className="border border-[#ffffff5f] p-3 px-5 bg-secondary font-medium outline-none max-w-xs hover:opacity-70 duration-300"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </AnimatedPage>
  );
};
