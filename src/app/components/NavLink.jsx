import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="text-transparent sm:text-5xl bg-clip-text bg-gradient-to-l from-primary-900 to-secondary-300 font-bold block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
