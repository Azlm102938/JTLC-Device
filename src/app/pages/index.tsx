// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Classroom from '@/app/components/classroom/page'; // adjust path if needed

// export default function Page() {
//   const [events, setEvents] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await axios.get('/api/events');
//         setEvents(res.data);
//       } catch (err) {
//         console.error('Failed to fetch events', err);
//       }
//     };
//     fetchEvents();
//   }, []);

//   return (
//     <Classroom
//       roomKey="lgclassroom1"
//       imageSrc="/classroom/classroom.png"
//       calendarEvents={events}
//     />
//   );
// }
