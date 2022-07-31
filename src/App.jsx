import { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    const parsedNotes = JSON.parse(savedNotes);
    return parsedNotes || [];
  });
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNotesHandler = ({ title, body }) => {
    setNotes([
      ...notes,
      {
        id: +new Date(),
        title,
        body,
        createdAt: new Date().toJSON(),
        archived: false,
      },
    ]);
  };

  const onDeleteNotesHandler = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const onArchivedNotesHandler = (id) => {
    const archivedNotes = [...notes];
    const notesIndex = notes.findIndex((note) => note.id === id);
    archivedNotes[notesIndex].archived = !archivedNotes[notesIndex].archived;
    setNotes(archivedNotes);
  };

  const onSearchNotesHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Header onSearch={onSearchNotesHandler} query={query} />
      <Body
        notes={notes}
        addNote={onAddNotesHandler}
        onDelete={onDeleteNotesHandler}
        onArchive={onArchivedNotesHandler}
        query={query}
      />
    </>
  );
}

export default App;
