import './join.css'
import joinUs from '../assets/images/join-us.jpg'


const Join = () => {
    return ( 
        <section className="join">
            <div className="join-content the-boxed-content-area">
                <div className="join-row">
                    <div className="join-row-l">
                        <h1 className='join-row-h1'>
                            Join us in Our Affordable Housing Drive
                        </h1>
                        <p className='join-row-p'>
                            Sign up to receive updates as we make giant strides in our affordable housing drive for Nigerians.
                        </p>
                        <form action="" className="join-row-form">
                            <input type="email" placeholder="Enter your Email" className='join-row-l-input'/>
                            <button className='join-row-button'>SIGN UP<i className="fa fa-arrow-right-long"></i></button>
                        </form>
                    </div>
                    <div className="join-row-r" style={{
                        backgroundImage: `url(${joinUs})`
                        }}>

                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Join;