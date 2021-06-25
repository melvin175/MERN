/* eslint-disable no-dupe-keys */
const connectDB = require("./db/db");
const Product = require("./model/productModel");

// import { connectDB } from "./db/db";
// import { Product } from './model/productModel';
connectDB();

const Products = [
  {
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 1950,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624540692/backpack_todizo.jpg",
  },
  {
    name: "Mens Casual Premium Slim Fit T-Shirts",
    price: 7000,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket.",
    category: "men's clothing",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624612483/2_gknqct.jpg",
  },
  {
    name: "Mens Cotton Jacket",
    price: 1029,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
    category: "men's clothing",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624612492/3_re0eaq.jpg",
  },
  {
    name: "Mens Casual Slim Fit",
    price: 580,
    description:
      "The color could be slightly different between on the screen and in practice.",
    category: "men's clothing",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624612498/4_a60ozb.jpg",
  },
  {
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 1950,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624612507/5_bpueiu.jpg",
  },
  {
    name: "Solid Gold Petite Micropave",
    price: 2000,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States.",
    category: "jewelery",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624612528/6_wqolwm.jpg",
  },
  {
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 200,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
    category: "jewelery",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624612537/7_u4ptfz.jpg",
  },
  {
    name: "White Gold Plated Princess",
    price: 1245,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement.",
    category: "jewellery",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624612597/8_abawvb.jpg",
  },
  {
    name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 950,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless ",
    category: "jewellery",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624612695/9_dnxxad.png",
  },
  {
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s.",
    price: 850,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive.",
    category: "electronics",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624612702/10_y87aoi.png",
  },
  {
    name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 2320,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance.",
    category: "electronics",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624612709/11_cvryxn.jpg",
  },
  {
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive.",
    price: 1330,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624613184/12_cgla6y.jpg",
  },
  {
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin.",
    price: 2950,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9.",
    category: "electronics",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624613234/13_bcsm8a.jpg",
  },
  {
    name: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9.",
    price: 3050,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support.",
    category: "electronics",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624613244/14_v2ceac.jpg",
  },
  {
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 1000,
    description:
      "ote:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester;",
    category: "men's clothing",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624613253/15_wcueam.jpg",
  },
  {
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 2850,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON.",
    category: "women's clothing",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624613258/16_e2i7ih.jpg",
  },
  {
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 800,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat.",
    category: "women's clothing",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624613263/17_un17uq.jpg",
  },
  {
    name: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 978,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "women's clothing",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624613269/18_tak4ph.jpg",
  },
  {
    name: "Opna Women's Short Sleeve Moisture",
    price: 700,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away.",
    category: "women's clothing",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624613275/19_d5vwem.jpg",
  },
  {
    name: "DANVOUY Womens T Shirt Casual Cotton Short.",
    price: 2905,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch.",
    category: "wom",
    image:
      "https://res.cloudinary.com/dh0f4rsde/image/upload/v1624613280/20_ekhbsl.jpg",
  },
];

function main() {
  Products.forEach(async (product) => {
    const newProduct = new Product(product);

    await newProduct.save((err) => {
      if (err) {
        console.log("failed to seed");
      }
    });
  });
}
main();
