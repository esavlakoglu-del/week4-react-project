export const dynamic = "force-dynamic";

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

export default async function MessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 20,
  });

  return (
    <main style={{ maxWidth: "700px", margin: "40px auto", padding: "20px" }}>
      <h1>Submitted Messages</h1>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <li key={message.id} style={{ marginBottom: "20px" }}>
              <strong>{message.name}</strong>
              <p>{message.body}</p>
              <small>
                {message.email} — {message.createdAt.toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}

      <p>
        <a href="/contact">Back to contact form</a>
      </p>
    </main>
  );
}