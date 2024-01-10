import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopulerManue = () => {
    const [menu, setMenu] = useState([])
    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)})
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
            heading="Check it out"
            subHeading='---FROM OUR MENU---'
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>)
                }
            </div>
            
        </section>
    );
};

export default PopulerManue;