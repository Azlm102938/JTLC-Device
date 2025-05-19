// import type { NextApiRequest, NextApiResponse } from "next";
// import { getAccessToken } from "@/app/lib/microsoft";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const code = req.query.code as string;
//   if (!code) return res.status(400).send("Missing code");

//   try {
//     const tokenData = await getAccessToken(code);
//     res.setHeader(
//       "Set-Cookie",
//       `accessToken=${tokenData.access_token}; Path=/; HttpOnly`
//     );
//     res.redirect("/");
//   } catch (err: any) {
//     res.status(500).send(err.message);
//   }
// }
