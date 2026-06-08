function TagFilter({ tags, selectedTag, setSelectedTag }) {

  return (

    <select
      className="border p-2 rounded mb-4"
      value={selectedTag}
      onChange={(e) => setSelectedTag(e.target.value)}
    >

      <option value="">
        All Tags
      </option>

      {tags.map(tag => (

        <option
          key={tag}
          value={tag}
        >
          {tag}
        </option>

      ))}

    </select>

  );
}

export default TagFilter;