import './AffordableHomes.css'
import state_image from '../assets/images/state-image.jpg'

const AffordableHome = () => {
    return ( 
        <section className="AffordableHomes">
            <div className="AffordableHomes-content the-boxed-content-area">
                <h1 className='AffordableHomes-h1'>
                    Our Affordable Homes
                </h1>
                <div className="AffordableHomes-row">
                    <a href="#" className="AffordableHomes-row-1">
                        <img src={state_image} alt=""  className="state-images"/>
                        <p className='AffordableHomes-p'>
                            Kaduna Estate
                        </p>
                    </a>
                    <a href="#" className="AffordableHomes-row-2">
                        <img src={state_image} alt=""  className="state-images"/>
                        <p className='AffordableHomes-p'>
                            Nasarawa Estate
                        </p>
                    </a>
                    <a href="#" className="AffordableHomes-row-3">
                        <img src={state_image} alt=""  className="state-images"/>
                        <p className='AffordableHomes-p'>
                            Delta Estate
                        </p>
                    </a>
                    <a href="#" className="AffordableHomes-row-4">
                        <img src={state_image} alt=""  className="state-images"/>
                        <p className='AffordableHomes-p'>
                            Ogun Estate
                        </p>
                    </a>
                    <a href="#" className="AffordableHomes-row-5">
                        <img src={state_image} alt=""  className="state-images"/>
                        <p className='AffordableHomes-p'>
                            Kano Estate
                        </p>
                    </a>
                    <a href="#" className="AffordableHomes-row-6">
                        <img src={state_image} alt=""  className="state-images"/>
                        <p className='AffordableHomes-p'>
                            Oyo Estate
                        </p>
                    </a>
                    <a href="#">SEE MORE HOMES</a>
                    
                </div>
            </div>
        </section>
     );
}
 
export default AffordableHome;