import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Hero: FC = () => {
    return (
        <main className="container flex justify-between py-11 text-third">
            <div className="flex flex-col w-3/6 justify-evenly">
                <div>
                    <h1 className="text-3xl py-4 leading-10">Tea and Code offers a wide varitety of teas that reduce the bugs you create by up to 80% !</h1>
                    <p className="tracking-widest">And we all know that there are a lot of them </p>
                </div>
                <NavLink to="/shop" className="py-4 w-1/4 text-center bg-main text-white rounded-3xl hover:">Shop Now</NavLink>
            </div>
            <div className="w-3/6">
                <img src={require('./hero-image.jpg')} alt="hero" className="mix-blend-multiply"></img>
            </div>
        </main>
    )
}