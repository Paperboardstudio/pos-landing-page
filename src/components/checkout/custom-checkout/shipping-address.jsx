import React from "react";
import { Formik } from "formik";

const validate = (values) => {
  const { name, email, address } = values;
  const errors = {};
  if (!email) {
    errors.email = "Required";
  }
  if (!name) {
    errors.name = "Required";
  }
  if (!address) {
    errors.address = "Required";
  }

  return errors;
};

function ShippingAddress({ setShipping }) {
  const initialValues = {
    email: "",
    name: "",
    address: "",
  };
  return (
    <div>
      <h4>Shipping Address</h4>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values) => {
          console.log("values", values);
          setShipping(values);
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          const { name, email, address } = errors;
          return (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-4">
              <div>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  className={
                    "border border-gray-800 px-1 " +
                    "nomad-input" +
                    (email ? "error" : "")
                  }
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  className={
                    "border border-gray-800 px-1 " +
                    "nomad-input" +
                    (email ? "error" : "")
                  }
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={values.address}
                  className={
                    "border border-gray-800 px-1 " +
                    "nomad-input" +
                    (email ? "error" : "")
                  }
                  placeholder="Address"
                />
              </div>
              <div className="submit-btn">
                <button
                  type="submit"
                  className="p-2 rounded-md bg-slate-700 text-slate-100 "
                >
                  Continue
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

export default ShippingAddress;
