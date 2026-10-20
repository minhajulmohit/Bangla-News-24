import { createAuthClient } from "better-auth/react";

// No baseURL: the client uses the current origin + /api/auth.
// This keeps local and production environments working without
// accidentally baking a localhost URL into the production build.
export const authClient = createAuthClient();
