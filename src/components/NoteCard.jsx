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
  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 border ${
    note.pinned
      ? "border-yellow-400 bg-yellow-50"
      : "border-gray-100"
  }`}
>

  <div className="flex justify-between items-start mb-3">

    <h3 className="font-bold text-xl text-gray-800 break-words">
      {note.title}
    </h3>

    {note.pinned && (
      <span className="text-xl">
        📌
      </span>
    )}

  </div>

  <p className="text-gray-600 leading-relaxed min-h-[70px]">
    {note.description.length > 100
      ? note.description.slice(0, 100) + "..."
      : note.description}
  </p>

  <div className="mt-4">

    <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
      #{note.tag}
    </span>

  </div>

  <div className="grid grid-cols-2 gap-2 mt-5">

    <button
      onClick={() => setShowModal(true)}
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium transition"
    >
      👁 View
    </button>

    <button
      onClick={handleEdit}
      className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-medium transition"
    >
      ✏ Edit
    </button>

    <button
      onClick={() => pinNote(note.id)}
      className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg text-sm font-medium transition"
    >
      📌 Pin
    </button>

    <button
      onClick={() => archiveNote(note.id)}
      className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg text-sm font-medium transition"
    >
      📦 Archive
    </button>

  </div>

  <button
    onClick={() => deleteNote(note.id)}
    className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition"
  >
    🗑 Move To Trash
  </button>

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