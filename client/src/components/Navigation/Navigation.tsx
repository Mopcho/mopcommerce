import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Navigation: FC = () => {
    return (
        <nav>
           <ul className="flex justify-center bg-fourth w-full">
                <NavLink to="/Home" className="rounded-3xl p-5 text-lg text-main hover:bg-main hover:text-fourth hover:text-xl ease-in duration-300">Home</NavLink>
                <NavLink to="/Shop" className="rounded-3xl p-5 text-lg text-main hover:bg-main hover:text-fourth hover:text-xl ease-in duration-300">Shop</NavLink>
                <NavLink to="/Cart" className="rounded-3xl p-5 text-lg text-main hover:bg-main hover:text-fourth hover:text-xl ease-in duration-300">Cart</NavLink>
                <NavLink to="/Profile" className="rounded-3xl p-5 text-lg text-main hover:bg-main hover:text-fourth hover:text-xl ease-in duration-300">Profile</NavLink>
            </ul> 
        </nav>
    )
}