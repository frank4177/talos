import { HiOutlineHome } from "react-icons/hi2";
import { SiWpexplorer } from "react-icons/si";

export const sidebarMenus = [
    {
      icon: <HiOutlineHome size={30}/>,
      title: "Home",
      route: "/dashboard",
      route_name:"dashboard",
      id: Math.random(),
    },
    {
      icon: <SiWpexplorer size={30} />,
      title: "Explore",
      route: "/dashboard/explore",
      route_name:"explore",
      id: Math.random(),
    },
  ];