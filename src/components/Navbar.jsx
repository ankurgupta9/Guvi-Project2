import { Link } from "react-router-dom";

function Navbar() {

  return (
<div className="bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

    <h1 className="text-3xl font-bold text-indigo-600">
      📝 Notes App
    </h1>

    <div className="space-x-6 font-medium">
      <Link to="/" className="hover:text-indigo-600">
        Home
      </Link>

      <Link to="/archive" className="hover:text-indigo-600">
        Archive
      </Link>

      <Link to="/trash" className="hover:text-indigo-600">
        Trash
      </Link>
    </div>

  </div>
</div>

  );
}

export default Navbar;