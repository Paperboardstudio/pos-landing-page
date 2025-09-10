import React, { useEffect } from "react";

function Success({ history }) {
  return (
    <div>
      <div>
        <h1>Thank you for your order</h1>
        <p>
          We are currently processing your order, please check your confirmation
          email
        </p>
        <button>Return to homepage</button>
      </div>
    </div>
  );
}

export default Success;
