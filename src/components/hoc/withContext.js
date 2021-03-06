import React from "react";
import UserContext from "../../context/Context";

const withContext = (WrappedComponent) => {
  return function WithContext(props) {
    return <UserContext.Consumer>{(ctx) => <WrappedComponent {...props} {...ctx} />}</UserContext.Consumer>;
  };
};
export default withContext;
