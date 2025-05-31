import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const nav = [
  { id: 1, name: "Home", link: "/" },
  // { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Shop", link: "/products" },
];

export const bestSellerData = [
  {
    id: 1,
    name: "New Arrivals",
    image: require("../images/best1.png"),
  },
  {
    id: 2,
    name: "The Casual Wear",
    image: require("../images/best2.jpg"),
  },
  {
    id: 3,
    name: "Best Seller",
    image: require("../images/best3.jpg"),
  },
];

export const wearNowData = [
  {
    id: 1,
    name: "Impassioned Pants",
    price: "90",
    orderType: "Custom-Made",
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
    name: "The Smart Chic",
    image: require("../images/homepage-product1.png"),
  },
  {
    id: 2,
    name: "Ready To Go",
    image: require("../images/homepage-product2.png"),
  },
];

export const footerData = [
  {
    id: 1,
    title: "Contact Us",
    links: [
      {
        name: "whatsApp",
        linkUrl:
          "https://api.whatsapp.com/send?phone=263785763984&text=I%20am%20interested%20in%20your%20Products",
        icon: (
          <WhatsAppIcon
            sx={{
              fontSize: 16,
            }}
          />
        ),
      },
      {
        name: "Instagram",
        linkUrl:
          "https://api.whatsapp.com/send?phone=263785763984&text=I%20am%20interested%20in%20your%20Products",
        icon: (
          <WhatsAppIcon
            sx={{
              fontSize: 16,
            }}
          />
        ),
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "CUSTOMERS",
  //   links: ["Start a Return", "Return Policy", "Shipping Policy", "FAQs"],
  // },
  // {
  //   id: 3,
  //   title: "Company",
  //   links: [
  //     "About Us",
  //     "Careers",
  //     "Privacy Policy",
  //     "Terms of Service",
  //     "Accessibility Statement",
  //   ],
  // },
];

export const productDetailsData = [
  { image: require("../images/detail1.jpg") },
  { image: require("../images/detail2.jpg") },
  { image: require("../images/detail3.jpg") },
  { image: require("../images/detail4.jpg") },
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
