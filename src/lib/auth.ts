export type Role = "client" | "animator" | "admin";

export type SessionUser = {
  id: string;
  email: string;
  role?: Role;
};

export async function getUser(): Promise<SessionUser | null> {
  // TODO: integrate with Supabase auth
  return null;
}

export async function requireRole(role: Role): Promise<SessionUser> {
  const user = await getUser();
  if (!user || user.role !== role) {
    throw new Error("Unauthorized");
  }
  return user;
}


