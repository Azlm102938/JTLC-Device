// type Props = {
//   roomKey: string;
//   imageSrc: string;
//   calendarEvents?: any[];
// };

// export default function Classroom({ roomKey, imageSrc, calendarEvents = [] }: Props) {
//   return (
//     <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
//       {/* Your existing classroom UI */}
//       <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">{roomKey}</h1>
//       <img src={imageSrc} alt="Classroom" className="rounded-lg shadow-lg mb-6" />

//       <p className="text-center text-gray-700 max-w-2xl leading-relaxed mb-8">
//         Classroom is a modern learning space equipped with digital whiteboards, projectors, and comfortable seating.
//       </p>

//       {/* Calendar Events */}
//       <div className="max-w-2xl w-full">
//         <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
//         {calendarEvents.length === 0 ? (
//           <p className="text-center text-gray-500">No upcoming events.</p>
//         ) : (
//           <ul className="space-y-4">
//             {calendarEvents.map((event) => (
//               <li key={event.id} className="border p-4 rounded shadow">
//                 <p className="font-semibold">{event.subject}</p>
//                 <p className="text-sm text-gray-600">
//                   {new Date(event.start.dateTime).toLocaleString()} - {new Date(event.end.dateTime).toLocaleString()}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }
