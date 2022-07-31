import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

function ItemHeader({ title, createdAt }) {
  return (
    <>
      <h3 className="mb-1 text-2xl font-semibold">{title}</h3>
      <h4 className="mb-2 text-sm font-medium text-gray-700">
        {showFormattedDate(createdAt)}
      </h4>
    </>
  );
}

ItemHeader.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
};

export default ItemHeader;
