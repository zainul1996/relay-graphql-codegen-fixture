import type { ViewerQuery } from "./generated/graphql.ts";

export function viewerLabel(user: ViewerQuery["user"]): string {
  if (!user) return "anonymous";
  return user.name ?? user.login;
}
