import './Explore.css'
import explore_image_1 from '../assets/images/explore-image-1.png'
import explore_image_2 from '../assets/images/explore-image-2.png'
import explore_image_3 from '../assets/images/explore-image-3.png'



const Explore = () => {
    return ( 
        <section className="explore">
            <div className="explore-content">
                <div className="explore-row-1">
                    <div>
                        <img src={explore_image_1} alt="explore image 1" className="explore-img-1"/>
                    </div>
                    <div className="explore-h1-1">
                        <h1>
                            10,114
                        </h1>
                    </div>
                    <div>
                        <p>
                        HOMES FINANCED 
                        </p>
                    </div>
                </div>
                <div className="explore-row-2">
                    <div>
                    <img src={explore_image_2} alt="explore image 2" className="explore-img-2"/>
                    </div>
                    <div className="explore-h1-2">
                        <h1>
                            79,111
                        </h1>
                    </div>
                    <div>
                        <p>
                            JOBS CREATED
                        </p>
                    </div>
                </div>
                <div className="explore-row-3">
                    <div>
                    <img src={explore_image_3} alt="explore image 3" className="explore-img-3"/>
                    </div>
                    <div className="explore-h1-3">
                        <h1>
                            ₦7.4B
                        </h1>
                    </div>
                    <div>
                        <p>
                        INVESTMENT IN NEW HOMES 
                        </p>
                    </div>
                </div>     
            </div>                       
            <h3>
                Explore the Data Dashboard
            </h3>
            <a href="#" className="explore-link">SEE OUR DASHBOARD<i className="fa fa-arrow-right-long"></i></a>
        </section>
     );
}
 
export default Explore;