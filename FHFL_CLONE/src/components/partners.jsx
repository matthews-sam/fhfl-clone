import './partners.css'
import partner_image from '../assets/images/our-partners.jpg'


const partners = () => {
    return ( 
        <section className='partners' style={{
            backgroundImage: `url(${partner_image})`
            }}>
            <div className='h1-wrapper'>
                <h1 className="partners-h1">
                    OUR PARTNERS
                </h1>
            </div>
        </section>
     );
}
 
export default partners;