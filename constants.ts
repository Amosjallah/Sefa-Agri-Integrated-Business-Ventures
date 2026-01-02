
import { NavItem, BusinessInfo } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Sefa-Agri & Integrated Business Ventures",
  subsidiary: "Sefa-Agri Ghana Natural Aromatic Rice",
  phone: "0500242191",
  location: "Kasoa",
  region: "Central Region",
  country: "Ghana",
  hours: {
    weekdays: "8:00 AM – 5:00 PM",
    saturday: "9:00 AM – 2:00 PM",
    sunday: "Closed"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Products", path: "/products" },
  { label: "Quality Control", path: "/quality" },
  { label: "Contact", path: "/contact" }
];
