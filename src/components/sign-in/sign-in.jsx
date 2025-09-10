import React from "react";
import { Formik } from "formik";

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <>
      <h1>Sign In</h1>
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(values, error, handleChange, handleSubmit, isSubmitting) => {
            return (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    value={values.email}
                    className={"border border-gray-800 px-1"}
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    value={values.password}
                    className={"border border-gray-800 px-1"}
                  />
                </div>
                <div className="submit-btn">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="p-2 rounded-md bg-slate-700 text-slate-100"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default SignIn;
