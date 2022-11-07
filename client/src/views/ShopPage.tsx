
import { CategoriesSideBar } from "components/CategoriesSideBar/CategoriesSideBar";
import { ItemsList } from "components/ItemsList/ItemsList";
import { FC } from "react";

export const ShopPage: FC = () => {
    return (
        <section className="container flex justify-start my-10 gap-10 flex-col sm:flex-row">
            <CategoriesSideBar />
            <ItemsList></ItemsList>
        </section>
    )
}