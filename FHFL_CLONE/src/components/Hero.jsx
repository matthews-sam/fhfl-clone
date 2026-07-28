import './Hero.css'
import heroVideo from '../assets/videos/hero-video.mp4';

const Hero = () => {
    return ( 
        <section className="hero">
            <video autoPlay loop muted playsInline className="hero-video">
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <h1 className="hero-title">INVESTING IN AFFORDABLE HOUSING, CHANGING LIVES</h1>
        </section>
     );
}
 
export default Hero;