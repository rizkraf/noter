import React from "react";

function NotesSearch({ onSearch, query }) {
  return (
    <>
      <input
        type="text"
        className="w-full max-w-xs rounded-lg border-2 border-black py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-gray-700"
        placeholder="Cari Catatan"
        onChange={onSearch}
        value={query}
      />
    </>
  );
}

export default NotesSearch;
