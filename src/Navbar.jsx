import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div className="bg-indigo-600 text-white p-4 flex justify-between">

      <h1 className="font-bold text-xl">
        Notes App
      </h1>

      <div className="space-x-4">

        <Link to="/">Home</Link>

        <Link to="/archive">Archive</Link>

        <Link to="/trash">Trash</Link>

      </div>

    </div>

  );
}

export default Navbar;