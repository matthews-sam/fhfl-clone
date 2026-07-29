import './MoreAbout.css'

const MoreAbout = () => {
    return ( 
        <section className="more-about">
            <div className="the-boxed-content-area">
                <h2 className="more-about-h2">
                    Empowering Families with Decent Homes and Quality Life.
                </h2>
                <div className="more-about-row">
                    <div className="more-about-column-left">
                        <p className="more-about-p-l">
                        Family Homes Funds Limited (FHFL) supports families on low-income attain their home ownership dreams. FHFL is solving Nigeria housing deficit by making it easier for people to finance affordable housing projects that align with the New Urban Agenda and the Global Goals. These goals include creating sustainable cities and communities, reducing poverty, promoting good health and well being, providing clean water and sanitation, promoting decent work, supporting economic growth, and reducing inequalities. Our strategy is a joint-up approach with key stakeholders including state governments, project developers, development finance institutions.
                        </p>
                    </div>
                    <div className="more-about-column-right">
                        <p className="more-about-p-r">
                            We are changing the affordable housing landscape, one family at a time
                        </p>
                    </div>
                </div>
                <a href="#" className="more-about-link">More About FHFL<i className="fa fa-arrow-right-long"></i></a>
            </div>
        </section>
     );
}
 
export default MoreAbout;