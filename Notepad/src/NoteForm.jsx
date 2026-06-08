import { useState } from "react";

function NoteForm({ addNote }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    addNote({
      title,
      description,
      tag
    });

    setTitle("");
    setDescription("");
    setTag("");
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-6"
    >

      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        className="border p-2 w-full mb-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Tag"
        className="border p-2 w-full mb-3"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />

      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Add Note
      </button>

    </form>
  );
}

export default NoteForm;