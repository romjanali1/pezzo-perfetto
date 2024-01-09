
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-3/12 my-6">
            <p className="text-yellow-500">{subHeading}</p>
            <h3 className="text-4xl uppercase border-y-4 py-4 mb-2">{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;