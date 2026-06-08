import { useState } from "react";

import NoteForm from "../components/NoteForm";
import SearchBar from "../components/SearchBar";
import TagFilter from "../components/TagFilter";
import NoteCard from "../components/NoteCard";

function Home({
  notes,
  addNote,
  deleteNote,
  archiveNote,
  pinNote,
  editNote
}) {

  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const activeNotes = notes.filter(
    note =>
      !note.archived &&
      !note.trashed
  );

  const filteredNotes = activeNotes.filter(note => {

    const matchesSearch =
      note.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      note.description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesTag =
      selectedTag === ""
        ? true
        : note.tag === selectedTag;

    return matchesSearch && matchesTag;
  });

  const tags = [
    ...new Set(
      notes.map(note => note.tag)
    )
  ];

  const pinnedNotes =
    filteredNotes.filter(note => note.pinned);

  const normalNotes =
    filteredNotes.filter(note => !note.pinned);

  return (

    <div className="max-w-6xl mx-auto p-6">

      <NoteForm addNote={addNote} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <TagFilter
        tags={tags}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />

      {pinnedNotes.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-6 mb-4">
            📌 Pinned Notes
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            {pinnedNotes.map(note => (

              <NoteCard
                key={note.id}
                note={note}
                deleteNote={deleteNote}
                archiveNote={archiveNote}
                pinNote={pinNote}
                editNote={editNote}
              />

            ))}

          </div>
        </>
      )}

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Notes
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        {normalNotes.map(note => (

          <NoteCard
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            archiveNote={archiveNote}
            pinNote={pinNote}
            editNote={editNote}
          />

        ))}

      </div>

    </div>
  );
}

export default Home;