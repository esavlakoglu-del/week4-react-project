"use server";

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { revalidatePath } from "next/cache";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

export async function createMessage(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  if (!name || !email || !body) {
    throw new Error("All fields are required.");
  }

  await prisma.message.create({
    data: {
      name,
      email,
      body,
    },
  });

  revalidatePath("/messages");
}