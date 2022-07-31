import React from "react";
import PropTypes from "prop-types";

function ItemBody({ body }) {
  return (
    <>
      <p className="mb-6 font-medium">{body}</p>
    </>
  );
}

ItemBody.propTypes = {
  body: PropTypes.string,
};

export default ItemBody;
