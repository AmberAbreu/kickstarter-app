import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "amber@amber.com" },
    update: {},
    create: {
      email: "amber@amber.com",
      name: "Amber",
      campaigns: {
        create: {
          title: "Blink",
          description:
            "Help us kick off our app that reminds developers to blink!",
          status: true,
        },
      },
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: "bob@bob.com" },
    update: {},
    create: {
      email: "bob@bob.com",
      name: "Bob",
      campaigns: {
        create: [
          {
            title: "givEth",
            description: "Help us fund our startup!",
            status: true,
          },
          {
            title: "givEth2",
            description: "Help us fund our other startup!",
            status: false,
          },
        ],
      },
    },
  });
  console.log({ alice, bob });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
