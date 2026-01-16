
import heroImg from '../assets/hero_section_image.jpg'
// const heroImg="https://fsa2-assets.imgix.net/assets/UNIV/LSU/coding/LSU-Coding-Hero-Image-v2.jpg?auto=compress%2Cformat&crop=focalpoint&domain=fsa2-assets.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=675&ixlib=php-3.3.0&w=1200"
function HeroSection(){
    return(
        <div style={{backgroundImage:`url(${heroImg})`}} className="w-full h-150 bg-no-repeat bg-cover">
        
        
        </div>
    )
}
export default HeroSection