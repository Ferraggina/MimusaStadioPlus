import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [nft, setNft] = useState("");
  return (
    <form
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
      />

      <input type="submit" value="Buscar" />
    </form>
  );
}
