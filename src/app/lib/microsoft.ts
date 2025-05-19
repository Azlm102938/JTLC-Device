// import axios from "axios";

// export const getAccessToken = async (code: string) => {
//   const params = new URLSearchParams();
//   params.append("client_id", process.env.MICROSOFT_CLIENT_ID!);
//   params.append("scope", "https://graph.microsoft.com/.default offline_access");
//   params.append("code", code);
//   params.append("redirect_uri", process.env.MICROSOFT_REDIRECT_URI!);
//   params.append("grant_type", "authorization_code");
//   params.append("client_secret", process.env.MICROSOFT_CLIENT_SECRET!);

//   const res = await axios.post(
//     `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}/oauth2/v2.0/token`,
//     params
//   );
//   return res.data;
// };

// export const getCalendarEvents = async (accessToken: string) => {
//   const res = await axios.get("https://graph.microsoft.com/v1.0/me/events", {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   return res.data.value;
// };
