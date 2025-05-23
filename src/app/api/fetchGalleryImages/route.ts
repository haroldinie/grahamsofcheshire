import supabase from "@/supabaseClient"; // Adjust the path based on your project structure
import { NextResponse } from 'next/server';

export async function GET() {
  const { data, error } = await supabase
    .from('gallery_images')
    .select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}