import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Navigation: FC = () => {
    return (
        <header className="container">
        <nav className="flex items-center py-4 text-third">
            <div className="py-4"><NavLink to="/" className="text-2xl">&lt; Chaika /&gt;</NavLink></div>
           <ul className="hidden sm:flex justify-end flex-1 items-center gap-12 uppercase text-md">
                <NavLink to="/Shop" className="hover:font-medium hover:scale-125">Shop</NavLink>
                <NavLink to="/Cart" className="hover:font-medium hover:scale-125">Cart</NavLink>
                <NavLink to="/Profile" className="hover:font-medium hover:scale-125">Profile</NavLink>
            </ul> 
            <div className="sm:hidden flex flex-1 justify-end">
                <i className="text-3xl fa fa-bars"></i>
            </div>
        </nav>
        </header>
        
    )
}