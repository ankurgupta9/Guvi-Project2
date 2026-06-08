import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Trash from "./pages/Trash";

function App() {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(note) {
    setNotes([
      {
        id: Date.now(),
        pinned: false,
        archived: false,
        trashed: false,
        ...note
      },
      ...notes
    ]);
  }

  function deleteNote(id) {
    setNotes(
      notes.map(note =>
        note.id === id
          ? { ...note, trashed: true }
          : note
      )
    );
  }

function restoreNote(id) {

  setNotes(
    notes.map(note =>
      note.id === id
        ? {
            ...note,
            trashed: false,
            archived: false
          }
        : note
    )
  );

}

  function permanentDelete(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  function archiveNote(id) {
    setNotes(
      notes.map(note =>
        note.id === id
          ? { ...note, archived: !note.archived }
          : note
      )
    );
  }

  function pinNote(id) {
    setNotes(
      notes.map(note =>
        note.id === id
          ? { ...note, pinned: !note.pinned }
          : note
      )
    );
  }

  function editNote(updatedNote) {

    setNotes(
      notes.map(note =>
        note.id === updatedNote.id
          ? updatedNote
          : note
      )
    );
  }

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              notes={notes}
              addNote={addNote}
              deleteNote={deleteNote}
              archiveNote={archiveNote}
              pinNote={pinNote}
              editNote={editNote}
            />
          }
        />

        <Route
          path="/archive"
          element={
            <Archive
              notes={notes}
              archiveNote={archiveNote}
              deleteNote={deleteNote}
            />
          }
        />

        <Route
          path="/trash"
          element={
            <Trash
              notes={notes}
              restoreNote={restoreNote}
              permanentDelete={permanentDelete}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;