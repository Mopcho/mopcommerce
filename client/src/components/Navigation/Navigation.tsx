import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Navigation: FC = () => {
    return (
        <header>
        <nav className="bg-fourth container flex items-center py-4 mt-4 sm:mt-12">
            <div className="py-4"><h1 className="text-main">&lt; Tea and Code /&gt;</h1></div>
           <ul className="hidden sm:flex justify-end text-main flex-1 items-center gap-12 uppercase text-md">
                <NavLink to="/Home" className="">Home</NavLink>
                <NavLink to="/Shop" className="">Shop</NavLink>
                <NavLink to="/Cart" className="">Cart</NavLink>
                <NavLink to="/Profile" className="">Profile</NavLink>
            </ul> 
            <div className="sm:hidden flex flex-1 justify-end">
                <i className="text-3xl fa fa-bars"></i>
            </div>
        </nav>
        </header>
        
    )
}