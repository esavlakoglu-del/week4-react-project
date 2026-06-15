import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">Protected Dashboard</h1>
      <p>Welcome, {session.user.name}.</p>
      <p>This page is protected and only visible after signing in.</p>
    </main>
  );
}