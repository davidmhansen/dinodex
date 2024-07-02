"use client";

import { ChangeEvent } from "react";

interface SearchBarProps {
  placeholderText: string;
  searchString: string;
  setSearchString: (searchString: string) => void;
}

export default function SearchBar({
  placeholderText,
  searchString,
  setSearchString,
}: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Suche:</label>
      <input
        type="text"
        name="search"
        value={searchString}
        placeholder={placeholderText}
        onChange={handleChange}
      ></input>
    </div>
  );
}
