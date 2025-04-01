import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

interface MenuItem {
  key: string;
  icon: ReactNode;
  label: ReactNode;
}
const itemsFooter: MenuItem[] = [
  {
    key: "1",
    icon: (
      <Image src={"/images/png/flagusa.png"} alt="dw" width={24} height={24} />
    ),
    label: <Link href="/">Language</Link>,
  },
  {
    key: "2",
    icon: <IoSettingsOutline />,
    label: <Link href="/">Settings</Link>,
  },
  {
    key: "4",
    icon: <MdLogout />,
    label: <Link href="/">Log out</Link>,
  },
];

export default itemsFooter;
