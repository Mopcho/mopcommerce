import { FC } from "react";
import { ImageCard } from "components/styles/ImageCard.styled.js";

export const BestSellers: FC = () => {
    return (
        <section className="container flex flex-col gap-5">
            <h1 className="text-3xl text-third text-center">Best Sellers</h1>
            <div className="flex gap-5 justify-around items-center flex-col sm:flex-row">
                <ImageCard>
                    <img src={require('./tea1.jpg')} alt="tea"></img>
                    <h2 className="text-xl text-center">Indian Oolong</h2>
                </ImageCard>
                <ImageCard>
                    <img src={require('./tea2.jpg')} alt="tea"></img>
                    <h2 className="text-xl text-center">Spanish Oolong</h2>
                </ImageCard>
                <ImageCard>
                    <img src={require('./tea3.jpg')} alt="tea"></img>
                    <h2 className="text-xl text-center">Bulgarian Oolong</h2>
                </ImageCard>
            </div>
        </section>
    )
}