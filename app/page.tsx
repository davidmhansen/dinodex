import DinosaurList from "./components/DinosaurList";
import { Dinosaur as DinosaurType } from "../types";
import parseUrl from "@/utils/parse-url";

async function getData() {
  // * Fetch dinosaurs from API
  const res = await fetch(`${parseUrl("http://localhost:3000/api/dinosaurs")}`);

  // * Optionally handle the error
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  // * Ensure dinosaurs is an array
  const dinosaurArray: DinosaurType[] = data || [];

  return (
    <div>
      <DinosaurList data={dinosaurArray}></DinosaurList>
    </div>
  );
}
