import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?name=${search}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
