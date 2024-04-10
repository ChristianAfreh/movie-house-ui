import { RiMovie2Line } from "react-icons/ri";
import { BsListCheck } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { BiCameraMovie } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { PiShootingStar } from "react-icons/pi";
import { NavLink } from "react-router-dom";

interface MenuItem {
  title: string,
  icon?: JSX.Element,
  path: string
};




export default function MenuList() {

  const menuItems: MenuItem[] = [
    {
      title: "Home",
      icon: <IoHomeOutline />,
      path: "/"
    },
    {
      title: "Movies",
      icon: <RiMovie2Line />,
      path: "/movies"
    },
    {
      title: "Genres",
      icon: <BsListCheck />,
      path: "/genres"
    },
    {
      title: "Actors",
      icon: <GrGroup />,
      path: "/actors"
    },
    {
      title: "Producers",
      icon: <BiCameraMovie />,
      path: "/producers"
    },
    // {
    //   title: "Top Rated",
    //   icon: <PiShootingStar />,
    //   path: "/topRated"
    // },
  ]

  return (
    <nav className="mt-5">
      {menuItems.map((menuItem: MenuItem, index: number) =>
        <NavLink to={menuItem.path} key={index} className="flex my-6 mx-1 px-[1.5rem] font-bold
          hover:cursor-pointer hover:bg-gradient-to-r from-orange-200 to-red-500 
          hover:text-white hover:rounded-lg 
          hover:ease-linear hover: py-1">
          <span className="text-2xl">{menuItem.icon}</span>
          <span className="ml-6">{menuItem.title}</span>
        </NavLink>
      )}
    </nav>
  )
}
