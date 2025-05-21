// import { NextRequest, NextResponse } from "next/server";
// import { getCalendarEvents } from "@/app/lib/graph"; // adjust path as needed

// export async function GET(request: NextRequest) {
//   try {
//     // const { searchParams } = new URL(request.url);
//     const start = "2025-05-19T00:00:00Z";
//     const end = "2025-05-19T23:59:59Z";
//     const mailboxEmail = ...

//     const events = await getCalendarEvents(mailboxEmail, start, end);

//     return NextResponse.json(events);
//   } catch (error: any) {
//     console.error("Failed to fetch calendar events:", error.message || error);
//     return NextResponse.json(
//       { error: "Failed to fetch calendar events" },
//       { status: 500 }
//     );
//   }
// }
