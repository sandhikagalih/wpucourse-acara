import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/event" },
];

const BUTTON_ITEMS = [
  { label: "Register", href: "/auth/register", variant: "bordered" },
  { label: "Login", href: "/auth/login", variant: "solid" },
];

const SOCIAL_ITEMS = [
  {
    label: "Facebook",
    href: "https://facebook.com/acara",
    icon: <FaFacebook />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/@acara",
    icon: <FaInstagram />,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@acara",
    icon: <FaTiktok />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/@acara",
    icon: <FaTwitter />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@acara",
    icon: <FaYoutube />,
  },
];

export { NAV_ITEMS, BUTTON_ITEMS, SOCIAL_ITEMS };
