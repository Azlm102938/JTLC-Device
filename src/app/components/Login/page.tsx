// 'use client';

// import { signIn, signOut, useSession } from 'next-auth/react';

// export default function LoginButton() {
//   const { data: session } = useSession();

//   if (session) {
//     return (
//       <div className="text-center">
//         <p className="mb-2">Signed in as {session.user?.email}</p>
//         <button
//           onClick={() => signOut()}
//           className="px-4 py-2 bg-red-500 text-white rounded"
//         >
//           Sign out
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="text-center">
//       <button
//         onClick={() => signIn('azure-ad')}
//         className="px-4 py-2 bg-blue-600 text-white rounded"
//       >
//         Sign in with Microsoft
//       </button>
//     </div>
//   );
// }
