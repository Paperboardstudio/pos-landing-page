import React, { useState } from "react";
import { Formik } from "formik";
import { auth, createUserProfileDocument } from "../../firebase";
import "./signstyles.css";
import { Navigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.firstname) {
    errors.firstname = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

function SignUp() {
  const [error, setError] = useState(null);
  const initialValues = {
    firstname: "",
    email: "",
    password: "",
  };

  const handleSignUp = async (values, { setSubmitting }) => {
    const { firstname, email, password } = values;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName: firstname });
      // window.location.href = "/";
      Navigate("/");
      setSubmitting(false);
    } catch (error) {
      console.log("error", error);
      setSubmitting(false);
      setError(error);
    }
  };

  return (
    <div>
      <div className="sign-up">
        <h1>Sign Up</h1>
        <div className="form-container">
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSignUp}
          >
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
              const { firstname, email, password } = errors;
              return (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-2 my-2"
                >
                  <div>
                    <input
                      type="text"
                      name="firstname"
                      onChange={handleChange}
                      value={values.firstname}
                      placeholder="First Name"
                      className={
                        "border border-gray-800 px-1  " +
                        (firstname ? "error" : "")
                      }
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      placeholder="Email"
                      className={
                        "border border-gray-800 px-1  " + (email ? "error" : "")
                      }
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      placeholder="Password"
                      className={
                        "border border-gray-800 px-1  " +
                        (password ? "error" : "")
                      }
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="button is-black p-2 rounded-md bg-slate-700 text-slate-100 "
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="text-red-600">
                    {error && (
                      <p>
                        {error.message} {console.log(error)}
                      </p>
                    )}
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
