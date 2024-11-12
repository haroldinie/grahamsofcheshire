import supabase from "@/supabaseClient";
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { file_path, overlay_text } = await request.json();

  const { error } = await supabase
    .from('gallery_images')
    .insert([{ file_path, overlay_text }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Image and overlay text saved successfully" });
}