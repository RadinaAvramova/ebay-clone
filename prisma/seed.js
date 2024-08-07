const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function seedProducts() {
  try {

    await prisma.products.create({
      data: {
        title: "Brown Leather Bag",
        description: "",
        url: "https://picsum.photos/id/7",
        price: 2500 // EG: 25.00
      },
    });

    await prisma.products.create({
      data: {
        title: "School Books",
        description: "",
        url: "https://picsum.photos/id/20",
        price: 1999
      },
    });

    await prisma.products.create({
      data: {
        title: "Women's White Shoes",
        description: "",
        url: "https://picsum.photos/id/21",
        price: 9999
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Book",
        description: "",
        url: "https://picsum.photos/id/24",
        price: 5999
      },
    });

    await prisma.products.create({
      data: {
        title: "Cuban Mug",
        description: "",
        url: "https://picsum.photos/id/30",
        price: 1299
      },
    });

    await prisma.products.create({
      data: {
        title: "Barrel of Oil",
        description: "",
        url: "https://picsum.photos/id/34",
        price: 6589
      },
    });

    await prisma.products.create({
      data: {
        title: "Camera Gadgets",
        description: "",
        url: "https://picsum.photos/id/36",
        price: 22499
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Record Player",
        description: "",
        url: "https://picsum.photos/id/39",
        price: 23599
      },
    });

    await prisma.products.create({
      data: {
        title: "Dinner Table",
        description: "",
        url: "https://picsum.photos/id/42",
        price: 8999
      },
    });

    await prisma.products.create({
      data: {
        title: "Mac Book Pro",
        description: "",
        url: "https://picsum.photos/id/48",
        price: 159599
      },
    });

    await prisma.products.create({
      data: {
        title: "Light House",
        description: "",
        url: "https://picsum.photos/id/58",
        price: 999599
      },
    });

    await prisma.products.create({
      data: {
        title: "Computer with accessories",
        description: "",
        url: "https://picsum.photos/id/60",
        price: 9699
      },
    });

    await prisma.products.create({
      data: {
        title: "Cup of Tea",
        description: "",
        url: "https://picsum.photos/id/60",
        price: 125
      },
    });

    await prisma.products.create({
      data: {
        title: "Playstation Controller",
        description: "",
        url: "https://picsum.photos/id/96",
        price: 1599
      },
    });

    await prisma.products.create({
      data: {
        title: "Rasberries",
        description: "",
        url: "https://picsum.photos/id/102",
        price: 259
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Car",
        description: "",
        url: "https://picsum.photos/id/111",
        price: 104959
      },
    });

    await prisma.products.create({
      data: {
        title: "Mac Mini",
        description: "",
        url: "https://picsum.photos/id/119",
        price: 99999
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Bench",
        description: "",
        url: "https://picsum.photos/id/129",
        price: 8999
      },
    });

    await prisma.products.create({
      data: {
        title: "Broken Cars",
        description: "",
        url: "https://picsum.photos/id/133",
        price: 256595
      },
    });

    await prisma.products.create({
      data: {
        title: "Guitar",
        description: "",
        url: "https://picsum.photos/id/145",
        price: 12595
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
