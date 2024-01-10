

const MenuItems = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0px 200px 200px 200px'
}} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-2xl">{name}</h3>
                <p>{recipe}</p>
                <p className="text-yellow-500 text-xl">${price}</p>
            </div>
            
            
        </div>
    );
};

export default MenuItems;