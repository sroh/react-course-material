import React from "react";

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className} >
    {/* dynamic  / unknown props  */}
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;