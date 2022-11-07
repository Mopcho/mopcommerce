import { FC } from "react";
import { NavLink } from "react-router-dom";

export const CategoriesSideBar: FC = () => {
    return (
        <aside className="border-2 sm:w-1/4 h-max w-full">
               <ul className="flex gap-3 justify-start sm:flex-col flex-row">
                    {/* TODO : Those need to be fetched /categories */}
                    <li>
                        <NavLink to="/shop/black" className="hover:font-bold hover:text-main py-4 block w-full text-center" style={({isActive}) => 
                            isActive ? {background : "#eee", borderLeft : "6px solid #BCEAD5"} : {}
                        }
                    >Black Teas</NavLink>
                    </li>
                    <li>
                    <NavLink to="/shop/flavoured" className="hover:font-bold hover:text-main block w-full text-center py-4" style={({isActive}) => 
                            isActive ? {background : "#eee", borderLeft : "6px solid #BCEAD5", fontWeight : "bold"} : {}
                        }
                    >Flavoured Teas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop/chai" className="hover:font-bold hover:text-main block w-full text-center py-4" style={({isActive}) => 
                            isActive ? {background : "#eee", borderLeft : "6px solid #BCEAD5", fontWeight : "bold"} : {}
                        }>Chai Teas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop/oolong" className="hover:font-bold hover:text-main block w-full text-center py-4" style={({isActive}) => 
                            isActive ? {background : "#eee", borderLeft : "6px solid #BCEAD5", fontWeight : "bold"} : {}
                        }>Oolong Teas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop/white" className="hover:font-bold hover:text-main block w-full text-center py-4" style={({isActive}) => 
                            isActive ? {background : "#eee", borderLeft : "6px solid #BCEAD5", fontWeight : "bold"} : {}
                        }>White Teas</NavLink>
                    </li>
               </ul>
        </aside>
    )
}