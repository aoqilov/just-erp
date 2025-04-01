import Link from "next/link";
import { ReactNode } from "react";

import {
  HiClipboardDocumentList,
  HiOutlineUsers,
  HiOutlinePresentationChartLine,
} from "react-icons/hi2";
import { BsTable } from "react-icons/bs";
//
interface MenuItem {
  key: string;
  icon: ReactNode;
  label: ReactNode;
}
const itemsMenu: MenuItem[] = [
  {
    key: "1",
    icon: <HiClipboardDocumentList width={24} />,
    label: <Link href="/projects">Projects</Link>,
  },
  {
    key: "2",
    icon: <HiOutlineUsers />,
    label: <Link href="/">Employes</Link>,
  },
  {
    key: "3",
    icon: <BsTable />,
    label: <Link href="/">Log</Link>,
  },
  {
    key: "4",
    icon: <HiOutlinePresentationChartLine />,
    label: <Link href="/">Sales</Link>,
  },
];

export default itemsMenu;
