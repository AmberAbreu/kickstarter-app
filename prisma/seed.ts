import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//run the seed use CLI command: npx prisma db seed

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@alice.com" },
    update: {},
    create: {
      email: "alice@alice.com",
      name: "Alice",
      password: "abc123efg",
      campaigns: {
        create: {
          title: "Lightbulb",
          photoUrl:
            "https://images.unsplash.com/photo-1529310399831-ed472b81d589?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlnaHRidWxifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          description:
            "Help us kick off our new invention: the lightbulb! No more of those dangerous candles.",
          status: true,
        },
      },
    },
  });

  const farah = await prisma.user.upsert({
    where: { email: "farah@farah.com" },
    update: {},
    create: {
      email: "farah@farah.com",
      name: "Farah",
      password: "password",
      campaigns: {
        create: {
          title: "Typewriter",
          photoUrl:
            "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHlwZSUyMHdyaXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          description:
            "Put the pen down and pick up a typewriter. Funding this project will allow you and many others to get one step closer to minimizing the time it takes to complete your writing tasks by 50%.",
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
            title: "Wheel",
            photoUrl:
              "https://images.unsplash.com/photo-1609513441098-497a64298a0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN0b25lJTIwd2hlZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            description:
              "This brand new invention will get you where you need to go!",
            status: true,
          },
          {
            title: "Sliced Bread",
            photoUrl:
              "https://images.unsplash.com/photo-1592029780368-c1fff15bcfd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2xpY2VkJTIwYnJlYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            description:
              "We present to you: sliced bread! Now you can put the knife away, and spend more quality time enjoying your breakfast. ",
            status: true,
          },
        ],
      },
    },
  });
  const hank = await prisma.user.upsert({
    where: { email: "hank@hank.com" },
    update: {},
    create: {
      email: "hank@hank.com",
      name: "Hank",
      password: "abc123",
      campaigns: {
        create: [
          {
            title: "Fire",
            photoUrl:
              "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            description:
              "This new invention will help keep you and many others warm. Funding this revolutionary project will change your life.",
            status: true,
          },
          {
            title: "Hourglass",
            photoUrl:
              "https://images.unsplash.com/photo-1518281361980-b26bfd556770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91cmdsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description:
              "Shouldn't keeping time be easy? This invention makes it easier to keep track of an hour.",
            status: true,
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
