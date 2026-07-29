import './Strategy.css'
import strategy from '../assets/images/Strategy.jpg';


const Strategy = () => {
    return ( 
        <section className="Strategy">
            <div className="the-boxed-content-area">
                <div className="Strategy-content">
                    <h2 className="Strategy-h2">
                        Our 'Changing Lives' Strategy
                    </h2>                    
                    <p className="Strategy-p">
                        Many people believe that affordable housing is just a pipe dream. But we know that by working together, using our expertise, experience, and innovative ideas, and making smart financial investments, we can make affordable housing a reality. That is why we have created a system that brings together different stakeholders and professionals to help build affordable and innovative homes that will meet the needs of communities across Nigeria. We believe that everyone deserves a place to call home, and we are dedicated to making that a possibility for as many people as we can
                    </p>
                    <a href='#' className="Strategy-link">LEARN MORE<i className="fa fa-arrow-right-long Strategy-link-i"></i></a>                    
                </div>
                <img src={strategy} alt="children image" className="Strategy-img"/>

            </div>
        </section>
    );
}
 
export default Strategy;