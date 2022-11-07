import { BestSellers } from "components/BestSellers/BestSellers";
import { Hero } from "components/Hero/Hero";
import { FC } from "react";

export const HomePage: FC = () => {
    return (
        <>
            <Hero></Hero>
            <BestSellers></BestSellers>
        </>
    )
}