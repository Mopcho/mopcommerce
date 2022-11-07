import { FC } from "react";

export const SingleItem: FC<{ title: string, price: number, imageUrl: string }> = ({ title, price, imageUrl }) => {
    return (
        <div className="flex flex-col mb-6">
            <img src={imageUrl} alt="Tea" className="object-cover w-[200px] h-[200px] hover:opacity-70 hover:cursor-pointer scale-95 hover:scale-100"></img>
            <div className="flex justify-between align-bottom items-center scale-95">
                <h4 className="text-2xl text-third">{title}</h4>
                <p className="text-md text-main">{price}$</p>
            </div>
        </div>
    )
}