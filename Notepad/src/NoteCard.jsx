import { useState } from "react";
import NoteModal from "./NoteModal";

function NoteCard({
  note,
  deleteNote,
  archiveNote,
  pinNote,
  editNote
}) {

  const [showModal, setShowModal] = useState(false);

  function handleEdit() {

    const newTitle = prompt(
      "Edit Title",
      note.title
    );

    const newDescription = prompt(
      "Edit Description",
      note.description
    );

    if (!newTitle || !newDescription) return;

    editNote({
      ...note,
      title: newTitle,
      description: newDescription
    });
  }

  return (

    <>
      <div
        className={`bg-white rounded-lg shadow p-4 ${
          note.pinned
            ? "border-2 border-yellow-400"
            : ""
        }`}
      >

        <h3 className="font-bold text-lg">
          {note.title}
        </h3>

        <p className="text-gray-600 mt-2">
          {note.description.slice(0, 80)}
        </p>

        <span className="inline-block mt-3 bg-indigo-100 px-2 py-1 rounded text-sm">
          #{note.tag}
        </span>

        <div className="flex flex-wrap gap-2 mt-4">

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            View
          </button>

          <button
            onClick={handleEdit}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Edit
          </button>

          <button
            onClick={() => pinNote(note.id)}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Pin
          </button>

          <button
            onClick={() => archiveNote(note.id)}
            className="bg-purple-500 text-white px-3 py-1 rounded"
          >
            Archive
          </button>

          <button
            onClick={() => deleteNote(note.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Trash
          </button>

        </div>

      </div>

      {showModal && (
        <NoteModal
          note={note}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default NoteCard;