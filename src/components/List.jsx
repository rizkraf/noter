import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function List({ notes, onDelete, onArchive, query }) {
  const unarchivedNotes = notes
    .filter((note) => note.archived === false)
    .filter((note) => {
      if (query) {
        return note.title.toLowerCase().includes(query.toLowerCase());
      }
      return true;
    });

  const archivedNotes = notes
    .filter((note) => note.archived === true)
    .filter((note) => {
      if (query) {
        return note.title.toLowerCase().includes(query.toLowerCase());
      }
      return true;
    });

  return (
    <>
      <section id="unarchivedNotes" className="mb-10">
        <h2 className="mb-3 text-3xl font-bold">Catatan</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {unarchivedNotes.length > 0 ? (
            unarchivedNotes.map((note) => (
              <Item
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onArchive={onArchive}
                {...note}
              />
            ))
          ) : (
            <p>Tidak ada catatan</p>
          )}
        </div>
      </section>

      <section id="archivedNotes">
        <h2 className="mb-3 text-3xl font-bold">Arsip</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {archivedNotes.length > 0 ? (
            archivedNotes.map((note) => (
              <Item
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onArchive={onArchive}
                {...note}
              />
            ))
          ) : (
            <p>Tidak ada catatan</p>
          )}
        </div>
      </section>
    </>
  );
}

List.propTypes = {
  notes: PropTypes.array,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  query: PropTypes.string,
};

export default List;
