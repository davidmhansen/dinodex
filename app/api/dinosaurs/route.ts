import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  // * has to be inside the function body or else it will not be called
  const supabase = createClient();

  // * get all entries in the dinosaurs table from supabase db
  const { data, error } = await supabase.from("dinosaurs").select("*");

  // * error handling
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
