import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//run the seed use CLI command: npx prisma db seed

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "amber@amber.com" },
    update: {},
    create: {
      email: "amber@amber.com",
      name: "Amber",
      password: "abc123efg",
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
      password: "bobby1234",
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
