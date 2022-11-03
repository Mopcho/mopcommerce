import { StyledHero } from "components/styles/StyledHero.styled";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Hero: FC = () => {
    return (
        <StyledHero className="container flex justify-between py-16 text-third flex-col sm:flex-row items-center relative">
            <div className="flex flex-col justify-evenly flex-1 w-full sm:w-3/6 items-center sm:items-start gap-5 slide-left">
                    <div className="text-center sm:text-left delay-200 ease-in">
                        <h1 className="text-3xl py-4 leading-10">Tea and Code offers a wide varitety of teas that reduce the bugs you create by up to 80% !</h1>
                        <p className="tracking-widest">And we all know that there are a lot of them </p>
                    </div>
                <NavLink to="/shop" className="py-4 px-4 text-center bg-main text-white rounded-3xl hover:scale-110 whitespace-nowrap">Shop Now</NavLink>
            </div>
            <div className="w-3/6 slide-right">
                <img src={require('./tea.png')} alt="hero" className="mix-blend-multiply"></img>
            </div>
            <i className="fa-sharp fa-solid fa-arrow-down text-4xl sm:absolute sm:left-2/4 sm:top-3/4 animate-bounce"></i>
        </StyledHero>
    )
}