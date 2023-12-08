import { RiHome3Line,  } from "react-icons/ri";
import { BsListCheck,BsPerson } from "react-icons/bs";

interface MenuItem {
  title: string,
  icon?: JSX.Element,
  path: string
};




export default function MenuList() {

  const menuItems: MenuItem[] = [
    {
      title: "Home",
      icon: <RiHome3Line />,
      path: "/"
    },
    {
      title: "Genres",
      icon: <BsListCheck />,
      path: "/"
    },
    {
      title: "Top Rated",
      icon: <BsPerson />,
      path: "/"
    },
    {
      title: "New Releases",
      icon: <BsPerson />,
      path: "/"
    },
    {
      title: "Top Actors",
      icon: <BsPerson />,
      path: "/"
    },
    {
      title: "Top Producers",
      icon: <BsPerson />,
      path: "/"
    }
  ]

  return (
    <div className="mt-5">
      <ul>
        {menuItems.map((menuItem: MenuItem, index: number) =>
          <li key={index} className="flex my-6 mx-1 px-[1.5rem] font-bold
          hover:cursor-pointer hover:bg-gradient-to-r from-orange-200 to-red-500 
          hover:text-white hover:rounded-lg 
          hover:ease-linear active:">
            <span className="text-2xl">{menuItem.icon}</span>
            <span className="ml-6">{menuItem.title}</span>
          </li>
        )}
      </ul>
    </div>
  )
}
