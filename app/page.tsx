import DinosaurList from "./components/DinosaurList";
import { createClient } from "@/utils/supabase/server";
import { Dinosaur as DinosaurType } from "../types";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/dinosaurs");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function Home() {
  // const data = await getData();
  const supabase = createClient();

  let { data: dinosaurs, error } = await supabase.from("dinosaurs").select("*");

  // Ensure dinosaurs is an array
  const dinosaurArray: DinosaurType[] = dinosaurs || [];

  // Optionally handle the error
  if (error) {
    console.error("Failed to fetch dinosaurs:", error.message);
  }

  return (
    <div>
      <DinosaurList data={dinosaurArray}></DinosaurList>
    </div>
  );
}
