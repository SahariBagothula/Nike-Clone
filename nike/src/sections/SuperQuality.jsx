import Button from '../components/Button';
import { bigShoe1 } from '../assets/images';

const SuperQuality = () => {
    return(
        <section id='about-us'className='flex justigy-between items-center max-lg:flex-col gap-10 w-full max-container'>
            <div className='flex flex-1 flex-col'>
                <h2 className='text-4xl capitalize font-palanquin font-bold lg:max-w-lg'>We Provide You <span className='text-coral-red'>Super</span><span className='text-coral-red'>Quality</span>Shoes</h2>
                <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction</p>
                <Button label='View details' iconURL='/' />
            </div>
            <div>
                <img src={bigShoe1} alt='big shoe'/>
            </div>
        </section>
    )
}

export default SuperQuality;