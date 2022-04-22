import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/admin/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Customers",
    path: "/admin/customers",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/admin/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Suscriber List",
    path: "/admin/subscribers",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/admin/quiries",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Terms & Condition",
    path: "/admin/termcond",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Book Your Order",
    path: "/admin/bookorder",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Payment & Return",
    path: "/admin/payret",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Privacy Policy",
    path: "/admin/privacypolicy",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
