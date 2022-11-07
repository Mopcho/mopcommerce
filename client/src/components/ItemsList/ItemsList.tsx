import { SingleItem } from "components/SingleItem/SingleItem";
import { FC } from "react";

export const ItemsList: FC = () => {
    return (
        <section className="flex flex-wrap w-3/4">
            <SingleItem {...{title: 'Tea 1', price : 10, imageUrl: 'https://www.teaforturmeric.com/wp-content/uploads/2021/11/Masala-Chai-Tea-Recipe-Card.jpg'}} />
        </section>
    )
}