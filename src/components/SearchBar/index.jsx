import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../../scss/components/_searchBar.scss";

export default function SearchBar({ onSearch }) {
  const [nft, setNft] = useState("");
  return (
    <div className="searchBarLine">
      <form
        className="searchBar"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(nft);
        }}
      >
        <input
          type="text"
          placeholder="BUSCA TU DROP AQUI"
          value={nft}
          onChange={(e) => setNft(e.target.value)}
          className="input"
        />

        <button type="submit" className="lupa">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}
