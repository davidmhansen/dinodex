"use client";

import data from "../../data/dinosaurs.json";
import Dinosaur from "./Dinosaur";
import { Dinosaur as DinosaurType } from "../../types";

import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import TypeSelect from "./TypeSelect";

export default function DinosaurList() {
  const [dinosNew, setDinosNew] = useState<DinosaurType[]>(data);
  const [type, setType] = useState("all");
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    let filteredDinos = data;
    if (type !== "all") {
      filteredDinos = filteredDinos.filter(
        (dino: DinosaurType) => dino.type === type
      );
    }
    if (searchString) {
      filteredDinos = filteredDinos.filter((dino: DinosaurType) =>
        Object.values(dino).some((value) =>
          value.toString().toLowerCase().includes(searchString.toLowerCase())
        )
      );
    }
    setDinosNew(filteredDinos);
  }, [type, searchString]);

  return (
    <div>
      <TypeSelect type={type} setType={setType}></TypeSelect>
      <SearchBar
        placeholderText="Search Dinosaurs"
        searchString={searchString}
        setSearchString={setSearchString}
      ></SearchBar>
      <div className="flex flex-wrap gap-4">
        {dinosNew.map((dino: DinosaurType, index: number) => (
          <Dinosaur key={index} dino={dino}></Dinosaur>
        ))}
      </div>
    </div>
  );
}
