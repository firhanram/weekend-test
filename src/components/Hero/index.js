import Background from '../../assets/images/background.png'
import Lego from '../../assets/images/lego.png'

// Adding background to Hero section
const style = {
    backgroundImage: `url(${Background})`
}

const Hero = () => {
    return (
        <section className="w-full pt-32 pb-5 h-section bg-primary bg-no-repeat bg-cover bg-center relative" style={style}>
            <div className="flex flex-col w-full h-full items-center relative">
                <h1 className="uppercase font-black text-5xl text-primary text-center">weekend from home</h1>
                <h3 className="text-primary font-semibold mt-5">Stay active with a little workout</h3>
                <div className="flex mt-16 flex-col items-center relative">
                    <img src={Lego} alt="Lego" className="w-44"/>
                    <button className="px-6 w-56 h-14 -translate-y-2/4 top-2/3 rounded-4xl bg-white shadow-primary absolute">Let's Go</button>
                </div>
            </div>
        </section>
    )
}

export default Hero