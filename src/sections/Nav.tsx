import Link from 'next/link';
import {
  BsCodeSlash,
  BsFillInfoCircleFill,
  BsHouseFill,
  BsList
} from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { IoMdPin } from 'react-icons/io';

type Props = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
};

const menuList = [
  {
    title: 'Home',
    link: '#home',
    id: 'home',
    icon: <BsHouseFill />
  },
  {
    title: 'About',
    link: '#about',
    id: 'about',
    icon: <BsFillInfoCircleFill />
  },
  {
    title: 'Services',
    link: '#services',
    id: 'services',
    icon: <BsCodeSlash />
  },
  {
    title: 'Location',
    link: '#location',
    id: 'location',
    icon: <IoMdPin />
  },
  {
    title: 'Contact',
    link: '#contact',
    id: 'contact',
    icon: <FiMail />
  }
];

const Nav = ({ showMenu, setShowMenu, activeSection }: Props) => {
  const onClick = () => setShowMenu(!showMenu);

  return (
    <>
      <button
        onClick={onClick}
        className='fixed left-[5%] z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#38b6ff] text-lg font-semibold text-white drop-shadow-2xl max-md:bottom-[20%] md:top-1/2 md:-translate-y-1/2'
      >
        <BsList />
      </button>

      <div
        onClick={onClick}
        className={`absolute z-[1] h-full w-full cursor-default bg-black ${showMenu ? 'opacity-30' : 'pointer-events-none opacity-0'} transition-all duration-500`}
      />

      <nav
        className={`fixed left-[20%] z-10 flex flex-col gap-4 drop-shadow-2xl max-md:bottom-[5%] md:top-1/2 md:left-[10%] md:-translate-y-1/2 ${showMenu ? 'translate-x-0' : 'pointer-events-none -translate-x-[120%] scale-[0.25] opacity-0'} transition-all duration-300`}
      >
        {menuList.map((menu, index) => (
          <Link
            key={index}
            href={menu.link}
            className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold drop-shadow transition-all duration-300 ${
              activeSection === menu.id
                ? 'scale-110 bg-white text-[#38b6ff]'
                : 'bg-[#38b6ff] text-white'
            }`}
          >
            {menu.icon}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Nav;
