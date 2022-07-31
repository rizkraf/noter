import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import List from "./List";

function Body({ notes, addNote, onDelete, onArchive, query }) {
  return (
    <main className="mx-auto max-w-screen-md px-5 py-5 font-primary md:px-0">
      <Input addNote={addNote} />
      <List
        notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
        query={query}
      />
    </main>
  );
}

Body.propTypes = {
  notes: PropTypes.array,
  addNote: PropTypes.func,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  query: PropTypes.string,
};

export default Body;
