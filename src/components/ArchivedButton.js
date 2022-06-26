import React from "react";

function ArchivedButton({ id, archived, onArchive }) {
  return (
    <button
      className="flex-1 rounded-lg border-2 border-black bg-amber-300 py-2"
      onClick={() => onArchive(id)}
    >
      {archived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}

export default ArchivedButton;
