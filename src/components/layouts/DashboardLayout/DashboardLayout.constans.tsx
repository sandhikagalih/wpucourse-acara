import {
  CiBookmark,
  CiShoppingTag,
  CiUser,
  CiViewList,
  CiWallet,
} from "react-icons/ci";

const SIDEBAR_ADMIN = [
  {
    key: "event",
    label: "Event",
    href: "/admin/event",
    icon: <CiViewList />,
  },
  {
    key: "category",
    label: "Category",
    href: "/admin/category",
    icon: <CiShoppingTag />,
  },
  {
    key: "banner",
    label: "Banner",
    href: "/admin/banner",
    icon: <CiBookmark />,
  },
  {
    key: "transaction",
    label: "Transaction",
    href: "/admin/transaction",
    icon: <CiWallet />,
  },
];

const SIDEBAR_MEMBER = [
  {
    key: "transaction",
    label: "Transaction",
    href: "/member/transaction",
    icon: <CiWallet />,
  },
  {
    key: "profile",
    label: "Profile",
    href: "/member/profile",
    icon: <CiUser />,
  },
];

export { SIDEBAR_ADMIN, SIDEBAR_MEMBER };
