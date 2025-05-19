// import type { NextApiRequest, NextApiResponse } from "next";
// import { getCalendarEvents } from "../../../lib/microsoft";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const token = req.cookies.accessToken;
//   if (!token) return res.status(401).send("Unauthorized");

//   try {
//     const events = await getCalendarEvents(token);
//     res.status(200).json(events);
//   } catch (err: any) {
//     res.status(500).json({ error: err.message });
//   }
// }
