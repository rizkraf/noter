import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchive, query }) {
  const unarchivedNotes = notes.filter((note) => note.archived === false);
  const archivedNotes = notes.filter((note) => note.archived === true);

  const unarchivedFiltered = unarchivedNotes.filter((note) => {
    if (query) {
      return note.title.toLowerCase().includes(query.toLowerCase());
    }
    return true;
  });

  const archivedFiltered = archivedNotes.filter((note) => {
    if (query) {
      return note.title.toLowerCase().includes(query.toLowerCase());
    }
    return true;
  });

  return (
    <>
      <section id="unarchivedNotes" className="mb-10">
        <h2 className="mb-3 text-3xl font-bold">Catatan</h2>
        <div className="grid grid-cols-2 gap-8">
          {unarchivedFiltered.length > 0 ? (
            unarchivedFiltered.map((note) => (
              <NotesItem
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
        <div className="grid grid-cols-2 gap-8">
          {archivedFiltered.length > 0 ? (
            archivedFiltered.map((note) => (
              <NotesItem
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

export default NotesList;
