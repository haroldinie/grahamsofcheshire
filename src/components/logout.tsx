import supabase from '@/supabaseClient';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login'); // Redirect to login page after logging out
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
}