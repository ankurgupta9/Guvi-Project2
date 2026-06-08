function Trash({
  notes,
  restoreNote,
  permanentDelete
}) {

  const trashedNotes = notes.filter(
    note => note.trashed
  );

  return (

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        🗑 Trash
      </h1>

      {trashedNotes.length === 0 && (

        <div className="bg-white p-6 rounded shadow text-center">
          Trash is empty.
        </div>

      )}

      <div className="grid md:grid-cols-3 gap-4">

        {trashedNotes.map(note => (

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

            <span className="inline-block mt-3 bg-red-100 px-2 py-1 rounded text-sm">
              #{note.tag}
            </span>

            <div className="flex gap-2 mt-4">

              <button
                onClick={() => restoreNote(note.id)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Restore
              </button>

              <button
                onClick={() => permanentDelete(note.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete Forever
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Trash;