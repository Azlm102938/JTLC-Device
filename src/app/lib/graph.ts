// import axios from "axios";

// function getEnvVar(name: string): string {
//   const value = process.env[name];
//   if (!value) {
//     throw new Error(`Missing environment variable: ${name}`);
//   }
//   return value;
// }

// // Step 1: read env vars as possibly undefined
// const tenantId = getEnvVar("AZURE_TENANT_ID");
// const clientId = getEnvVar("AZURE_CLIENT_ID");
// const clientSecret = getEnvVar("AZURE_CLIENT_SECRET");

// // Step 2: check runtime and throw if any are missing
// if (!tenantId || !clientId || !clientSecret) {
//   throw new Error(
//     "Missing Azure AD environment variables: AZURE_TENANT_ID, AZURE_CLIENT_ID, or AZURE_CLIENT_SECRET"
//   );
// }

// // Now tenantId, clientId, clientSecret are all strings (TypeScript narrows after the check)

// let accessToken: string | null = null;
// let tokenExpiresAt = 0;

// /**
//  * Get an access token using client credentials flow
//  */
// async function getAccessToken(): Promise<string> {
//   // Step 3: check cached token, assert non-null on return
//   if (accessToken && Date.now() < tokenExpiresAt) {
//     return accessToken!;
//   }

//   const url = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
//   const params = new URLSearchParams();
//   params.append("grant_type", "client_credentials");
//   params.append("client_id", clientId);
//   params.append("client_secret", clientSecret);
//   params.append("scope", "https://graph.microsoft.com/.default");

//   try {
//     const response = await axios.post(url, params.toString(), {
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     });

//     accessToken = response.data.access_token;
//     // Set expiry time 5 minutes earlier for safety
//     tokenExpiresAt = Date.now() + (response.data.expires_in - 300) * 1000;

//     return accessToken!;
//   } catch (error: any) {
//     console.error(
//       "Failed to get access token:",
//       error.response?.data || error.message
//     );
//     throw new Error("Could not get access token");
//   }
// }

// interface CalendarEvent {
//   id: string;
//   subject: string;
//   start: { dateTime: string; timeZone: string };
//   end: { dateTime: string; timeZone: string };
//   location?: { displayName: string };
// }

// /**
//  * Get calendar events from a mailbox between start and end ISO datetime strings
//  */
// export async function getCalendarEvents(
//   mailboxEmail: string,
//   startDateTime: string,
//   endDateTime: string
// ): Promise<CalendarEvent[]> {
//   const token = await getAccessToken();

//   const url = `https://graph.microsoft.com/v1.0/users/${mailboxEmail}/calendarView?startDateTime=${startDateTime}&endDateTime=${endDateTime}&$orderby=start/dateTime`;

//   console.log("Fetching calendar events from Graph API:", url);

//   try {
//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response.data.value as CalendarEvent[];
//   } catch (error: any) {
//     if (error.response) {
//       console.error("Graph API error status:", error.response.status);
//       console.error(
//         "Graph API error data:",
//         JSON.stringify(error.response.data, null, 2)
//       );
//     } else {
//       console.error("Graph API error:", error.message);
//     }
//     throw new Error("Failed to fetch calendar events");
//   }
// }
