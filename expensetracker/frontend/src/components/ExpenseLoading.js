import React from "react";

function ExpenseLoading(Component) {
  return function ExpenseLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p style={{ fontSize: "25px" }}>Waiting for data to load...</p>;
  };
}

export default ExpenseLoading;
