import supabase from '@/supabaseClient';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <button onClick={handleLogout} className="w-full text-white py-2 rounded-md bg-[#7C0A02] hover:bg-[#5E1914]">
      Logout
    </button>
  );
}