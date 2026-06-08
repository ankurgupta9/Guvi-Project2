function NoteModal({ note, closeModal }) {

  if (!note) return null;

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 rounded w-[90%] md:w-[500px]">

        <h2 className="text-2xl font-bold mb-3">
          {note.title}
        </h2>

        <p className="mb-4">
          {note.description}
        </p>

        <span className="bg-indigo-100 px-3 py-1 rounded">
          #{note.tag}
        </span>

        <div className="mt-6">

          <button
            onClick={closeModal}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>

        </div>

      </div>

    </div>

  );
}

export default NoteModal;