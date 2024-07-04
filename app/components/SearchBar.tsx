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
      <label htmlFor="search" className="mr-2">
        Suche:
      </label>
      <input
        type="text"
        name="search"
        className="border p-2 rounded-md w-[300px]"
        value={searchString}
        placeholder={placeholderText}
        onChange={handleChange}
      ></input>
    </div>
  );
}
