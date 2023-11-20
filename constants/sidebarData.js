import { HiOutlineHome } from "react-icons/hi2";

export const sidebarMenus = [
    {
      icon: <HiOutlineHome size={30} color="white"/>,
      title: "Learning",
      route: "/dashboard",
      id: Math.random(),
    },
    {
      icon: <FaLanguage size={30} />,
      title: "Video Course",
      route: "/dashboard/video-course",
      id: Math.random(),
    },
    {
      icon: <FaLanguage size={30} />,
      title: "Favourites",
      route: "/dashboard/favourites",
      id: Math.random(),
    },
  ];