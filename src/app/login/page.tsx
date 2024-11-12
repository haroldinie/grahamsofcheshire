// Login Component

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/supabaseClient';
import LogoutButton from '@/components/logout';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      router.push('/upload'); // Redirect on successful login
    }
  };

  //the above works the below is new code to test
  



  // the below is the latest one that currently doesnt work

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const { data, error }: AuthTokenResponsePassword = await supabase.auth.signInWithPassword({ email, password });
    
//     if (error) {
//         setError(error.message);
//     } else {
//         const user: User | null = data?.user;
//         console.log('Logged in user:', user);
        
//         // Fetch the session after a successful login
//         const { data: { session }, error: sessionError } = await supabase.auth.getSession();

//         if (sessionError) {
//             console.error('Error fetching session:', sessionError);
//             setError('Failed to retrieve session after login.');
//         } else {
//             console.log('Session:', session); // Log the session
//             router.push('/upload'); // Redirect on successful login
//         }
//     }
// };



  
  return (
<div className="flex flex-col items-center justify-center pt-10 p-4">
  <div className="flex flex-col items-center w-full max-w-sm p-6 rounded-lg shadow-md space-y-4 border">
    <h2 className="text-2xl font-semibold">Login</h2>
    <form onSubmit={handleLogin} className="flex flex-col w-full space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full border border-gray-300 p-2 rounded-md text-black"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full border border-gray-300 p-2 rounded-md text-black"
      />
      <button
        type="submit"
        className="w-full text-white py-2 rounded-md bg-[#AD974F] hover:bg-[#8E793E]"
      >
        Login
      </button>
      {error && <p className="error-message text-red-500 text-center">{error}</p>}
    </form>
    <div className="w-full">
      <LogoutButton />
    </div>
  </div>
</div>

  );
}


// 'use client';

// import { Suspense, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import supabase from '@/supabaseClient';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
//     if (error) setError(error.message);
//     else router.push('/upload'); // Redirect to the upload page if login is successful
//   };

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Login</button>
//           {error && <p className="error-message">{error}</p>}
//         </form>
//       </div>
//     </Suspense>
//   );
// }


// 'use client'

// import { Suspense, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import supabase from '@/supabaseClient';

// export default function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState<string | null>(null);
//     const router = useRouter();

//     const handleLogin = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const { error } = await supabase.auth.signInWithPassword({
//             email,
//             password,
//         });
//         if (error) setError(error.message);
//         else router.push('/upload'); // Redirect to the upload page if login is successful
//     };

//     return (
//         <Suspense fallback={<div>Loading...</div>}>

//         <div className="login-container">
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//                 {error && <p className="error-message">{error}</p>}
//             </form>
//         </div>
//         // </Suspense>

//     );
// }