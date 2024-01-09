import banner from '../../../assets/home/chef-service.jpg';
const HomeBanner = () => {
    return (
        <div className='mb-20 md:relative'>
            <div> <img src={banner} alt="" /> </div>
            <div className='text-center md:absolute top-1/4 right-1/4 md:w-3/6 bg-white py-20 px-20'>
                <h3 className='text-4xl mb-4'>Bistro Boss</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
            
        </div>
    );
};

export default HomeBanner;