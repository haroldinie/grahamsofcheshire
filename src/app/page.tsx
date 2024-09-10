import Link from "next/link";

export default function Home() {
  return ( <>
    <header className="flex justify-between items center mb-4">
      <Link
        className="px-2 py-1 hover:text-slate-400 focus-within:text-slate-400"
        href="/">Home</Link>
    <Link 
        className="px-2 py-1 hover:text-slate-400 focus-within:text-slate-400"
        href="/about">About</Link>
    <Link 
       className="px-2 py-1 hover:text-slate-400 focus-within:text-slate-400"
       href="/menus">Menus</Link>
    <Link 
        className="px-2 py-1 hover:text-slate-400 focus-within:text-slate-400"
        href="/reviews">Reviews</Link>
    <Link
        className="px-2 py-1 hover:text-slate-400 focus-within:text-slate-400"
        href="/gallery">Gallery</Link>
    <Link 
        className="px-2 py-1 hover:text-slate-400 focus-within:text-slate-400"
        href="/contact">Contact Us</Link>
    </header>
    </>
  );
}
