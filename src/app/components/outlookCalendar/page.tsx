// import React, { useEffect, useState } from 'react';

// interface CalendarEvent {
//   id: string;
//   subject: string;
//   start: { dateTime: string; timeZone: string };
//   end: { dateTime: string; timeZone: string };
//   location?: { displayName: string };
// }

// const OutlookCalendar: React.FC = () => {
//   const [events, setEvents] = useState<CalendarEvent[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchEvents() {
//       setLoading(true);
//       setError(null);

//       try {
//         const start = new Date().toISOString();
//         const end = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

//         const res = await fetch(`/api/outlook?start=${start}&end=${end}`);
//         if (!res.ok) throw new Error('Failed to fetch calendar events');

//         const data = await res.json();
//         setEvents(data);
//       } catch (err: any) {
//         setError(err.message || 'Unknown error');
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchEvents();
//   }, []);

//   if (loading) return <div>Loading calendar events...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (events.length === 0) return <div>No events found.</div>;

//   return (
//     <div>
//       <h2>Upcoming Events</h2>
//       <ul>
//         {events.map(event => (
//           <li key={event.id}>
//             <strong>{event.subject}</strong><br />
//             {new Date(event.start.dateTime).toLocaleString()} - {new Date(event.end.dateTime).toLocaleString()}<br />
//             {event.location?.displayName && <em>Location: {event.location.displayName}</em>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default OutlookCalendar;
