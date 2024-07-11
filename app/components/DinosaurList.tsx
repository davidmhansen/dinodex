"use client";

import Dinosaur from "./Dinosaur";
import { Dinosaur as DinosaurType } from "../../types";

import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import TypeSelect from "./TypeSelect";

// * Set options for TypeSelect component
const options = ["All", "Herbivore", "Carnivore"];

export default function DinosaurList({ data }: { data: Array<DinosaurType> }) {
  const [dinosNew, setDinosNew] = useState<DinosaurType[]>(data);
  const [type, setType] = useState("all");
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    // * Start with original data
    let filteredDinos = data;

    // * Filter by type if type is not "all"
    if (type !== "all") {
      filteredDinos = filteredDinos.filter(
        (dino: DinosaurType) => dino.type === type
      );
    }

    // * Filter by search string
    if (searchString) {
      filteredDinos = filteredDinos.filter((dino: DinosaurType) =>
        Object.values(dino).some((value) =>
          value.toString().toLowerCase().includes(searchString.toLowerCase())
        )
      );
    }
    setDinosNew(filteredDinos);
  }, [data, type, searchString]);

  return (
    <div>
      <div className="flex gap-8 items-center justify-center mb-6">
        <TypeSelect
          type={type}
          setType={setType}
          options={options}
        ></TypeSelect>
        <SearchBar
          placeholderText="Search Dinosaurs"
          searchString={searchString}
          setSearchString={setSearchString}
        ></SearchBar>
      </div>
      <div className="flex flex-wrap gap-4 items-stretch">
        {dinosNew.map((dino: DinosaurType, index: number) => (
          <Dinosaur key={index} dino={dino}></Dinosaur>
        ))}
      </div>
    </div>
  );
}
