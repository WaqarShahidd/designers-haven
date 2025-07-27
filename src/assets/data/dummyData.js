import { DescriptionOutlined, Instagram, WhatsApp } from "@mui/icons-material";

export const nav = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Shop", link: "/products" },
  { id: 3, name: "Meet the Designers", link: "/designers" },
];

export const bannerSlides = [
  {
    id: 1,
    image: require("../../assets/images/banner1.png"),
    title: "Empowering Zimbabwean Fashion. Connecting Africa.",
    description:
      "Designer’s Haven is a curated fashion tech platform that supports emerging designers through digital visibility, access, and resources — building a thriving ecosystem across Africa.",
    buttons: [
      {
        text: "Shop Now",
        route: "/products",
      },
      {
        text: "Become a Designer",
        linkUrl: "https://admin.designershaven.africa/signup",
      },
    ],
  },
  {
    id: 2,
    image: "https://designershavenimages.s3.eu-north-1.amazonaws.com/p6.jpg",
    title: "Shop Local. Shop Proudly.",
    description:
      " Discover handcrafted, original fashion from Zimbabwe’s boldest designers. Support local talent, celebrate African creativity.",
    buttons: [
      {
        text: "Explore Collections",
        route: "/products",
      },
      {
        text: "Learn More",
        linkUrl: "https://admin.designershaven.africa/signup",
      },
    ],
  },
];

export const bestSellerData = [
  {
    id: 1,
    name: "New Arrivals",
    image: "https://designershavenimages.s3.eu-north-1.amazonaws.com/p1.jpg",
  },
  {
    id: 2,
    name: "The Casual Wear",
    image: "https://designershavenimages.s3.eu-north-1.amazonaws.com/p3.jpg",
  },
  {
    id: 3,
    name: "Best Seller",
    image: "https://designershavenimages.s3.eu-north-1.amazonaws.com/p6.jpg",
  },
];

export const wearNowData = [
  {
    id: 1,
    name: "Impassioned Pants",
    price: "90",
    orderType: "Custom-Made",
    image:
      "https://drive.google.com/uc?export=view&id=1cB3-C6aSQUggKemDxqO2kIN3l2Klkl8U",
    colors: [
      {
        name: "Black",
        color: "#000000",
      },
      {
        name: "Red",
        color: "#FF5733",
      },
      {
        name: "Green",
        color: "#33FF57",
      },
    ],
  },
  {
    id: 2,
    name: "Concertina Phone Bag",
    price: "248",
    image:
      "https://drive.usercontent.google.com/download?id=1cB3-C6aSQUggKemDxqO2kIN3l2Klkl8U&export=view&authuser=0",
    colors: [
      {
        name: "Black",
        color: "#000000",
      },
      {
        name: "Red",
        color: "#FF5733",
      },
      {
        name: "Green",
        color: "#33FF57",
      },
    ],
  },
  {
    id: 3,
    name: "Wool Cashmere Sweater Coat",
    price: "398",
    image:
      "https://drive.usercontent.google.com/download?id=1cB3-C6aSQUggKemDxqO2kIN3l2Klkl8U&export=view&authuser=0",
    colors: [
      {
        name: "Black",
        color: "#000000",
      },
      {
        name: "Red",
        color: "#FF5733",
      },
      {
        name: "Green",
        color: "#33FF57",
      },
    ],
  },
  {
    id: 4,
    name: "Single-Origin Cashmere Beanie",
    price: "98",
    image:
      "https://drive.usercontent.google.com/download?id=1cB3-C6aSQUggKemDxqO2kIN3l2Klkl8U&export=view&authuser=0",
    colors: [
      {
        name: "Black",
        color: "#000000",
      },
      {
        name: "Red",
        color: "#FF5733",
      },
      {
        name: "Green",
        color: "#33FF57",
      },
    ],
  },
  {
    id: 5,
    name: "Classic Easy Zipper Tote",
    price: "248",
    image:
      "https://drive.usercontent.google.com/download?id=1cB3-C6aSQUggKemDxqO2kIN3l2Klkl8U&export=view&authuser=0",
    colors: [
      {
        name: "Black",
        color: "#000000",
      },
      {
        name: "Red",
        color: "#FF5733",
      },
      {
        name: "Green",
        color: "#33FF57",
      },
    ],
  },
];

export const featuredData = [
  {
    id: 1,
    name: "Urban Elegance",
    image: "https://designershavenimages.s3.eu-north-1.amazonaws.com/p2.jpg",
  },
  {
    id: 2,
    name: "Ready To Go",
    image: "https://designershavenimages.s3.eu-north-1.amazonaws.com/p4.jpg",
  },
];

export const footerData = [
  {
    id: 1,
    title: "Contact Us",
    links: [
      {
        name: "WhatsApp",
        linkUrl:
          "https://api.whatsapp.com/send?phone=263785763984&text=I%20am%20interested%20in%20your%20Products",
        Icon: WhatsApp,
        iconStyle: {
          color: "#25D366",
          fontSize: "24px",
        },
      },
      {
        name: "Instagram",
        linkUrl: "https://www.instagram.com/designershavenzw/",
        Icon: Instagram,
        iconStyle: {
          color: "#E1306C",
          fontSize: "24px",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Legal",
    links: [
      {
        name: "Privacy Policy",
        linkUrl:
          "https://drive.google.com/file/d/1A_9w8YmKqNIa8CID28N9bnaGM69yYuYq/view?usp=sharing",
        Icon: DescriptionOutlined,
        iconStyle: {
          color: "#000",
          fontSize: "24px",
        },
      },
    ],
  },
];

export const colorsData = [
  { color: "#C4C4B0", name: "Beige" },
  { color: "#000000", name: "Black" },
  { color: "#9fc5e8", name: "Blue" },
  { color: "#FF5733", name: "Red" },
  { color: "#C70039", name: "Pink" },
  { color: "#581845", name: "Purple" },
];

export const sizesData = [
  { size: "XS" },
  { size: "S" },
  { size: "M" },
  { size: "L" },
  { size: "XL" },
  { size: "XXL" },
];

export const materialData = [
  { material: "Cotton (19)" },
  { material: "Polyester (12)" },
  { material: "Wool (8)" },
  { material: "Silk (5)" },
  { material: "Leather (3)" },
  { material: "Linen (2)" },
];
