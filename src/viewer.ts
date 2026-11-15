import type { ViewerQuery } from "./generated/graphql.ts";

export function viewerLabel(user: ViewerQuery["user"]): string {
  if (!user) return "anonymous";
  return user.name ?? user.login;
}

export function viewerEmail(user: ViewerQuery["user"]): string | null {
  if (!user) return null;
  return user.email ?? null;
}
