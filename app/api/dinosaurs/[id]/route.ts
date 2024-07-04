import { NextResponse } from "next/server";
import { createClient } from "../../../../utils/supabase/server";
import { notFound } from "next/navigation";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // init client
  const supabase = createClient();
  const id = params.id;

  // search for matching dinosaur in supabase db
  let { data: dinosaurs, error } = await supabase
    .from("dinosaurs")
    .select("*")
    .eq("id", Number(id));

  // make sure that responseData has a default empty array value if undefined or null
  const responseData = dinosaurs ?? [];

  // if no dinosaur is found the array is empty and returns a 404 instead of an empty array
  if (responseData.length === 0) {
    notFound();
  }

  return NextResponse.json(responseData);
}
