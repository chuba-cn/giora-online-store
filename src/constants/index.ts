import { StaticImageData } from "next/image";
import {
  Prodcut1,
  Prodcut10,
  Prodcut11,
  Prodcut12,
  Prodcut2,
  Prodcut3,
  Prodcut4,
  Prodcut5,
  Prodcut6,
  Prodcut7,
  Prodcut8,
  Prodcut9,
  amex,
  applePay,
  facebook,
  googlePay,
  heart,
  instagram,
  mastercard,
  product10OnHover,
  product11OnHover,
  product12OnHover,
  product1OnHover,
  product2OnHover,
  product3OnHover,
  product4OnHover,
  product5OnHover,
  product6OnHover,
  product7OnHover,
  product8OnHover,
  product9OnHover,
  shoppingCart,
  snapchat,
  userIcon,
  visa,
  whatsapp,
  youtube,
  paypal,
} from "../../public/assets";

const SKYBLUE = "#0CE5DD";
const VIOLET = "#E50CC2";
const PURPLE = "#920CE5";
const GREEN = "#2AE50C";
const BLUE = "#0C2FE5";
const RED = "#E50C0C";
const YELLOW = "#E5B50C";
const LEMON = "#85E50C";
const GOLD = "#927306";
const NAVY = "#10413F";
const GREY = "#354145";

export const navigation = [
  {
    id: 0,
    title: "Men",
    url: "#men",
  },
  {
    id: 1,
    title: "Women",
    url: "#women",
  },
  {
    id: 2,
    title: "Unisex",
    url: "#unisex",
  },
  {
    id: 3,
    title: "Kids",
    url: "#kids",
  },
];

export const navbarIcons = [
  {
    id: 0,
    icon: heart,
    href: "/liked",
  },
  {
    id: 1,
    icon: userIcon,
    href: "/profile",
  },
  {
    id: 2,
    icon: shoppingCart,
    href: "/cart",
  },
];

export const sidebarCategory = [
  {
    id: 0,
    title: "All",
  },
  {
    id: 1,
    title: "Dresses",
  },
  {
    id: 2,
    title: "Trousers",
  },
  {
    id: 3,
    title: "Beach wear",
  },
  {
    id: 4,
    title: "Bags",
  },
  {
    id: 5,
    title: "Accessories",
  },
];

export const sidebarStyle = [
  {
    id: 0,
    title: "Trending",
  },
  {
    id: 1,
    title: "Sales Discount",
  },
  {
    id: 2,
    title: "On Demand",
  },
  {
    id: 3,
    title: "Limited",
  },
];

export const sidebarColor = [
  {
    id: 1,
    color: SKYBLUE,
  },
  {
    id: 2,
    color: VIOLET,
  },
  {
    id: 3,
    color: PURPLE,
  },
  {
    id: 4,
    color: GREEN,
  },
  {
    id: 5,
    color: BLUE,
  },
  {
    id: 6,
    color: RED,
  },
  {
    id: 7,
    color: YELLOW,
  },
  {
    id: 8,
    color: LEMON,
  },
  {
    id: 9,
    color: GOLD,
  },
  {
    id: 10,
    color: NAVY,
  },
  {
    id: 11,
    color: GREY,
  },
];
type Color =
  | typeof SKYBLUE
  | typeof VIOLET
  | typeof PURPLE
  | typeof GREEN
  | typeof BLUE
  | typeof RED
  | typeof YELLOW
  | typeof LEMON
  | typeof GOLD
  | typeof NAVY
  | typeof GREY;

export interface Product {
  id: number;
  title: string;
  description: string;
  tag?: string;
  price: string;
  imgUrlOne: StaticImageData;
  imgUrlTwo: StaticImageData;
  colors: Color[];
}

export const products: Product[] = [
  {
    id: 0,
    title: "Gloria Zeni Sleeveless",
    description: "Women's dinner wear and summer wear",
    price: "$90",
    imgUrlOne: Prodcut1,
    imgUrlTwo: product1OnHover,
    colors: [SKYBLUE, VIOLET, PURPLE, GREEN],
  },
  {
    id: 1,
    title: "Corporate Sleeveless Dress",
    description: "Women's corporate office dress",
    price: "$45",
    imgUrlOne: Prodcut2,
    imgUrlTwo: product2OnHover,
    colors: [YELLOW, VIOLET, SKYBLUE, GOLD],
  },
  {
    id: 2,
    title: "Giora Signature Sleeping Gown",
    description: "Women's night gown",
    tag: "Limited",
    price: "$63",
    imgUrlOne: Prodcut3,
    imgUrlTwo: product3OnHover,
    colors: [YELLOW, VIOLET, PURPLE, BLUE],
  },
  {
    id: 3,
    title: "Amanda Belfast Sleeveless",
    description: "Women's dinner wear and summer dress",
    price: "$50",
    imgUrlOne: Prodcut4,
    imgUrlTwo: product4OnHover,
    colors: [NAVY, RED, LEMON, GREEN],
  },
  {
    id: 4,
    title: "Okonjo Iweala Dress",
    description: "Women's corporate office dress",
    price: "$60",
    imgUrlOne: Prodcut5,
    imgUrlTwo: product5OnHover,
    colors: [YELLOW, VIOLET, SKYBLUE, GOLD],
  },
  {
    id: 5,
    title: "Giora Signature Summer Dress",
    description: "Women's summer dress",
    price: "$120",
    imgUrlOne: Prodcut6,
    imgUrlTwo: product6OnHover,
    colors: [YELLOW, VIOLET, PURPLE, GOLD],
  },
  {
    id: 6,
    title: "Giora Signature Corporate Gown",
    description: "Women's corporate office dress",
    tag: "On Demand",
    price: "$63",
    imgUrlOne: Prodcut7,
    imgUrlTwo: product7OnHover,
    colors: [YELLOW, VIOLET, PURPLE, BLUE],
  },
  {
    id: 7,
    title: "Kim Young Sleeveless",
    description: "Women's dinner wear and summer dress",
    price: "$125",
    imgUrlOne: Prodcut8,
    imgUrlTwo: product8OnHover,
    colors: [NAVY, RED, LEMON, GREEN],
  },
  {
    id: 8,
    title: "Giora Signature Party Gown",
    description: "Women's party dress",
    price: "$50",
    imgUrlOne: Prodcut9,
    imgUrlTwo: product9OnHover,
    colors: [YELLOW, VIOLET, PURPLE, GOLD],
  },
  {
    id: 9,
    title: "Melbourne Classic Wear",
    description: "Women's corporate office dress",
    price: "$50",
    imgUrlOne: Prodcut10,
    imgUrlTwo: product10OnHover,
    colors: [NAVY, RED, LEMON, GREEN],
  },
  {
    id: 10,
    title: "Giora Queen Gown",
    description: "Women's summer dress",
    tag: "Trending",
    price: "$70",
    imgUrlOne: Prodcut11,
    imgUrlTwo: product11OnHover,
    colors: [YELLOW, VIOLET, PURPLE, BLUE],
  },
  {
    id: 11,
    title: "Giora Signature Corporate Dress",
    description: "Women's corporate office dress",
    price: "$80",
    imgUrlOne: Prodcut12,
    imgUrlTwo: product12OnHover,
    colors: [YELLOW, VIOLET, PURPLE, GOLD],
  },
];

export const recommendations: Product[] = [
  {
    id: 1,
    title: "Amanda Belfast Sleeveless",
    description: "Women's dinner wear and summer dress",
    price: "$50",
    imgUrlOne: Prodcut4,
    imgUrlTwo: product4OnHover,
    colors: [NAVY, RED, LEMON, GREEN],
  },
  {
    id: 2,
    title: "Okonjo Iweala Dress",
    description: "Women's corporate office dress",
    price: "$60",
    imgUrlOne: Prodcut5,
    imgUrlTwo: product5OnHover,
    colors: [YELLOW, VIOLET, SKYBLUE, GOLD],
  },
  {
    id: 3,
    title: "Giora Signature Summer Dress",
    description: "Women's summer dress",
    price: "$120",
    imgUrlOne: Prodcut6,
    imgUrlTwo: product6OnHover,
    colors: [YELLOW, VIOLET, PURPLE, GOLD],
  },
];

export const socials = [facebook, whatsapp, youtube, instagram, snapchat];

export const footer = [
  {
    id: 0,
    title: "Products",
    sections: [
      "Men's Wear",
      "Women's Wear",
      "Unisex",
      "Kid's Wear",
      "Shoes",
      "Bags",
      "Accessories",
    ],
  },
  {
    id: 1,
    title: "About Giora",
    sections: ["About Us", "Corporate News", "Investors", "Careers"],
  },
  {
    id: 2,
    title: "Support",
    sections: [
      "Contact Us",
      "Terms & Conditions",
      "Privacy Policy",
      "Shipping & Delivery",
      "Discount",
    ],
  },
  {
    id: 3,
    title: "FAQ",
    sections: [
      "Return Policy",
      "Referral Policy",
      "Cookie Settings",
      "Franchise Policy",
      "Student Discount",
    ],
  },
];

export const paymentMethod = [visa, mastercard, amex, googlePay, applePay];

export interface CartItem {
  id: number;
  title: string;
  tag?: string;
  price: string;
  imgUrl: StaticImageData;
  color: string;
  size: string;
  qty: number;
}

export const cartItem: CartItem[] = [
  {
    id: 0,
    title: "Gloria Queen Gown",
    tag: "TRENDING",
    price: "$70",
    imgUrl: Prodcut11,
    color: "Black",
    size: "UK 12",
    qty: 1,
  },
  {
    id: 1,
    title: "Gloria Zeni Sleeveless",
    price: "$90",
    imgUrl: Prodcut1,
    color: "Black",
    size: "UK 12",
    qty: 2,
  },
];
