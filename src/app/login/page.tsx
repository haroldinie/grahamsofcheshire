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

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <LogoutButton/>
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