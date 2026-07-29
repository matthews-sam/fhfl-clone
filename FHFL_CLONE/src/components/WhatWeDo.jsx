import './WhatWeDo.css'
import what_we_do from '../assets/images/what-we-do.png';


const WhatWeDo = () => {
    return ( 
        <section className="what-we-do">
            <div className="the-boxed-content-area">
                <img src={what_we_do} alt="Hands holding house" className="what-we-do-img"/>
                <div className="what-we-do-content">
                    <h2 className="what-we-do-h2">
                        What We Do
                    </h2>
                    <p className="what-we-do-p">
                        We invest in structures to create the conditions for hard-working Nigerian families to secure their own homes.<br /><br />
                        We do this because affordable homes not only provide a fundamental human right, providing families with the right environment to thrive and a greater overall sense of living but it is also a major driver of national growth
                    </p>
                    <a href='#' className="what-we-do-link">LEARN MORE<i className="fa fa-arrow-right-long what-we-do-link-i"></i></a>
                </div>
            </div>
        </section>
    );
}
 
export default WhatWeDo;