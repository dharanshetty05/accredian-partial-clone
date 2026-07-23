import { IconType } from "react-icons";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumnData {
  title: string;
  links?: FooterLink[];
  contact?: {
    emailLabel?: string;
    email: string;
    addressLabel?: string;
    address: string;
  };
}

export const footerColumns: FooterColumnData[] = [
  {
    title: "Accredian",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Why Accredian", href: "#" },
    ],
  },
  {
    title: "Contact Us",
    contact: {
      emailLabel: "Email us:",
      email: "enterprise@accredian.com",
      addressLabel: "Office Address:",
      address: "4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana",
    },
  },
];

export interface SocialLink {
  name: string;
  icon: IconType;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  { name: "X", icon: FaXTwitter, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "YouTube", icon: FaYoutube, href: "#" },
];
