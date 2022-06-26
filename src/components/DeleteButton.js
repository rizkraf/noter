import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="flex-1 rounded-lg border-2 border-black bg-red-500 py-2"
      onClick={() => onDelete(id)}
    >
      Hapus
    </button>
  );
}

export default DeleteButton;
