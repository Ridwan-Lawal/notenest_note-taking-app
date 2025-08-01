import { auth } from "@/src/auth";
import { cache } from "react";

export const getAuthSession = cache(async () => {
  const session = await auth();
  return session?.user;
});
