function SearchBar({ search, setSearch }) {

  return (

    <input
      type="text"
      placeholder="Search notes..."
      className="border p-2 rounded w-full mb-4"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

  );
}

export default SearchBar;