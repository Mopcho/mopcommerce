import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Hero: FC = () => {
    return (
        <main className="container flex justify-between py-11 bg-secondary">
            <div className="flex flex-col w-3/6 justify-evenly px-10">
                <h1 className="text-3xl text-fourth">Tea and Code offers a wide varitety of teas that can improve your coding performance up to 80% !</h1>
                <NavLink to="/shop" className="bg-third text-main py-4 px-5 w-2/4 text-center">Shop Now</NavLink>
            </div>
            <div className="w-3/6">
                <img src={require('./hero-image.jpg')} alt="hero" className="mix-blend-multiply"></img>
            </div>
        </main>
    )
}