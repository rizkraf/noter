import React from "react";
import PropTypes from "prop-types";

function AppButton({ id, onArchive, onDelete, children }) {
  return (
    <button
      className={`flex-1 rounded-lg border-2 border-black py-2 ${
        children === "Hapus" ? "bg-red-500" : "bg-amber-300"
      }`}
      onClick={() => (onArchive ? onArchive(id) : onDelete(id))}
    >
      {children}
    </button>
  );
}

AppButton.propTypes = {
  id: PropTypes.number,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
  children: PropTypes.string,
};

export default AppButton;
