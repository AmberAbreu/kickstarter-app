import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const post = await prisma.campaign.update({
    where: { id: 1 },
    data: { status: true },
  });
  console.log(post);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
