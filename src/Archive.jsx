import NoteCard from "../components/NoteCard";

function Archive({
  notes,
  archiveNote,
  deleteNote
}) {

  const archivedNotes = notes.filter(
    note =>
      note.archived &&
      !note.trashed
  );

  return (

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        📦 Archived Notes
      </h1>

      {archivedNotes.length === 0 && (

        <div className="bg-white p-6 rounded shadow text-center">
          No archived notes found.
        </div>

      )}

      <div className="grid md:grid-cols-3 gap-4">

        {archivedNotes.map(note => (

          <div
            key={note.id}
            className="bg-white rounded-lg shadow p-4"
          >

            <h3 className="font-bold text-lg">
              {note.title}
            </h3>

            <p className="mt-2 text-gray-600">
              {note.description}
            </p>

            <span className="inline-block mt-3 bg-indigo-100 px-2 py-1 rounded text-sm">
              #{note.tag}
            </span>

            <div className="flex gap-2 mt-4">

              <button
                onClick={() => archiveNote(note.id)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Restore
              </button>

              <button
                onClick={() => deleteNote(note.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Move To Trash
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Archive;