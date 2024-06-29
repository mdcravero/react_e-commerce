import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const categories = ["All", "Women", "Men", "Electronics", "Jewelery", "Others"];
const userLinks = ["My Orders", "My Account", "Sign In"];

const navLinks = (items) => {
  const activeStyle = ({ isActive }) =>
    isActive ? "underline underline-offset-4" : "";
  return items.map((item, index) => {
    const path =
      item === "All" ? "/" : `/${item.toLowerCase().replace(/\s/g, "-")}`;
    const label = item;

    return (
      <li key={index}>
        <NavLink to={path} className={activeStyle}>
          {label}
        </NavLink>
      </li>
    );
  });
};

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <nav className="fixed z-10 top-0 flex justify-between items-center gap w-full py-5 px-8 font-light text-sm border bg-white">
      <ul className="flex items-center gap-x-4">
        <NavLink to="/" className="mr-8 font-bold text-base">
          Tute-Shop
        </NavLink>
        {navLinks(categories)}
      </ul>
      <ul className="flex items-center gap-x-4">
        <li className="mr-4 text-black/50 cursor-pointer">
          user@tute-shop.com
        </li>
        {navLinks(userLinks)}
        <li className="flex items-center">
          <ShoppingCartIcon
            onClick={() => context.openCheckoutSideMenu()}
            className="size-6 text-black cursor-pointer"
          />
          <div>{context.cartProds.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
